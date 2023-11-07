
import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "GET"){
        const session = await getServerSession(req, res, authOptions)
        if(!session){
            return res.status(401).json({message:"You must be logged in first."})
        }
        try {
          const postId = req.query.slug as string  

          const data = await prisma.post.findUnique({
            where: {
                id: postId
            },
            include:{
                user:true,
                comment:{
                    orderBy:{
                        createdAt:"desc"
                    },
                    include:{
                        user:true
                    }
                }
            }
          })
          res.status(200).json(data)
        } catch (error) {
            res.status(403).json({message: " error fetching comments"})
        }
    }
}