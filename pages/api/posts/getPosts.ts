import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){
    if(req.method === "GET"){
        
        try {
            const data = await prisma.post.findMany({
                include:{
                    user: true,
                    comment:true,
                },
                orderBy:{
                    createdAt: "desc"
                }
            }
            )
            res.status(200).json(data)
        } catch (error) {
        res.status(403).json({error: "Error fetching posts"})
        }
    }
    
}