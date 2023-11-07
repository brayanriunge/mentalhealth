import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { prisma } from "@/util/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "DELETE"){
        const session = getServerSession(req, res, authOptions)
        if(!session){
            res.status(401).json({message:"login first"})
        }
        const postId = req.query.id as string
        try {
          const post = await prisma.post.findUnique({
            where:{
                id:postId
            }
          })
          if(!post){            
            res.status(200).json({message:"Post not found"}) 
          }
          const response = await prisma.post.delete({
            where:{
                id: postId
            }
          })
          res.status(200).json(response)
          console.log(response)
        } catch (error) {
            console.error("Error deleting post", error)
        }
    }
}