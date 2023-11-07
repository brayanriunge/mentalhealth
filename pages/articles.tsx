
import Layout from '@/components/Layout'
import AddPost from "@/components/sections/AddPost"

import { useEffect, useState } from 'react'
import Post from '@/components/sections/Post'



export interface PostData{
  id: string,
  title: string,
  updatedAt: string,
  user:{
    name:string,
    email:string,
    id: string,
  },
  comment: {
    id: string,
    createdAt: string,
    postId: string,
    userId: string,
    message:string
    user:{
      name: string,
      email: string,
      id: string,
    }
  }[]
}

export default function Home() {
  const [posts, setPosts]= useState<PostData[]>([])

  const fetchPosts= async ()=>{
    try {
      const response = await fetch("http://localhost:3000/api/posts/getPosts")
      const data =await response.json()
      console.log(data)
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts", error)
      
    }
  }
  useEffect(()=>{
   fetchPosts()
  },[])

  return (
   <Layout  >
    <div className = "mx-auto  w-5/6 py-20">
    <AddPost fetchPosts={fetchPosts}/>
    {posts.map((post)=> <Post key={post.id} name={post.user.name} postTitle={post.title} id={post.id} comment={post.comment}  />)}
    </div>
   
   </Layout>
  )
}
