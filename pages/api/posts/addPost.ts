// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import {prisma} from "@/util/db"




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 if(req.method === "POST"){
   const session = await getServerSession(req, res, authOptions)
   if(!session){
    return res.status(401).json({message:"You must be logged in first."})
   }
   console.log(req.body)
   const title: string= req.body.title

   //find User
   const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string}
   })

    // check title
    if(!title){
      return res.status(400).json({message: "This field should not be empty"})
     }
    if(title.length > 300){
     return res.status(403).json({message:"This field requires 300 characters"})
    }

    //create post
    try {
     const result = await prisma.post.create({
     data:{
       title,
       userId: user?.id as string,
      }
     })
     console.log(result)
     return res.status(200).json(result)
     
    } catch (error) {
     return res.status(403).json({message:"An error occurred while making a post "})
    }
 }
}
