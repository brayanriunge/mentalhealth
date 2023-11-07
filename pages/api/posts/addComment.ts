import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/util/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "POST"){
        const session= await getServerSession(req, res, authOptions)
        if(!session){
            return res.status(401).json({message:"You must be logged in "})
        }
        const {message} = req.body
        const postId = req.body.id as string 
        console.log("PostId:", postId)

        //find user
        const prismaUser = await prisma.user.findUnique({
            where:{email: session.user?.email as string}
        })

        //check message
        if(!message){
            return res.status(400).json({message:"This field should not be left empty"})
        }
        if(message.length > 300){
            return res.status(403).json({message:"This field requires 300 character maximum"})
        }

        //create comment
        try {
             
            const result = await prisma.comment.create({
                data:{
                    message,
                    postId,
                    userId: prismaUser?.id as string
                }
            })
            console.log(result)
            return res.status(200).json(result)
        } catch (error) {
            console.error(error)
            return res.status(403).json({message:"An error occurred while creating comment"})
        } 
    }
}