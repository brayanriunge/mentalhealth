import { useState } from "react"
import { HiOutlineX } from "react-icons/hi"

interface Post{
   id:string       
   createdAt: number
   title:   string
}

type TogglerProp={
   id: string
   handleDelete:(id:string)=>void 
   setToggle: (toggle: boolean)=> void
   
}
export default function Toggler({handleDelete,id,setToggle}:TogglerProp){
   const deletePost = ()=>{
      handleDelete(id)
   }
   
    return(
        <div onClick={(e)=>{setToggle(false)}} className="fixed bg-black/20 h-full w-full z-20 left-0 top-0">
           <div className="rounded-lg absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 flex flex-col gap-6">
             <h2 className="text-xl">
                Are you sure you want to delete this post?
             </h2>
             <h3 className= "text-red-600 text-sm" >
                Pressing the delete button will permanently delete your post 
             </h3>
             <button onClick={deletePost} className="text-white py-2 px-4 rounded-md bg-red-700">Delete Post</button>
           </div>
        </div>
    )
}