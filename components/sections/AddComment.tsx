import { useState } from "react"
import toast from "react-hot-toast"
// type Props={
//     postId:string
//     fetchDetails: ()=> void
// }

export default function AddComment({postId, fetchDetails}:any){
    const [message, setMessage]= useState("")
    const [isDisabled, setIsDisabled]= useState(false)
    let toastPostId : string


    async function  createComment(e: React.FormEvent){
        e.preventDefault()
        toast.loading("creating post", {id: toastPostId})
        setIsDisabled(false)
        setMessage("")

        try{
            const response = await fetch("http://localhost:3000/api/posts/addComment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({message, id: postId})
            })
            if(!response.ok){
                throw new Error(`Http Error! ${response.status}`)
            }else{
                toast.success("post has been made", {id: toastPostId})
                fetchDetails()
            }
            const data = await response.json()
            console.log(data)
            return(data)   
        }catch(error){
            console.log("Error", error)
        }

    }


    return(
       <form className="my-2" onSubmit={createComment}>
        <h3>Add a Comment</h3>
        <div className=" flex flex-col my-8">
            <input 
             type="text" 
             onChange={(e)=> setMessage(e.target.value)} 
             value={message} 
             name="message" 
             className="p-4 text-lg bg-white my-2 rounded-md" 
            />
        </div>
        <div className="flex  items-center justify-between gap-2">
                <p className={`font-bold text-sm ${message.length > 300 ? "text-red-700" : "text-gray-700"}`}>{`${message.length}/300`}</p>
                <button
                 className="bg-teal-600 px-6 py-2 rounded-xl text-sm disabled:opacity-25 text-white"
                 type="submit"
                 disabled = {isDisabled}
                >
                   Add a comment
                </button>
            </div>
       </form>
    )
}
