import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/util/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "GET"){
        const session = await getServerSession(req, res, authOptions)
        if(!session){
            return res.status(401).json({message:"Login first"})
        }
      
        try {
            const data = await prisma.user.findUnique({
                where:{
                    email: session.user?.email as string
                },
                include:{
                   posts:{
                    orderBy:{
                        createdAt: "desc"
                    },
                    include:{
                        comment: true
                    }
                   }
                }
            })
            res.status(200).json(data)
        } catch (error) {
           res.status(403).json({error:"error fetching Auth posts"})
            
        }
    }

}