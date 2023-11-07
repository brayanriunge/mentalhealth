import Layout from "@/components/Layout"
import MyPost from "@/components/sections/MyPost"
import { useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Dashboard(){
    const router = useRouter()
    const{data: session} = useSession()
    useEffect(()=>{
        if(!session){
            router.push("/api/auth/signin")
        }
    },[])
   
    return(
        <Layout>
            <section className=" min-h-full">
            <h1 className="text-2xl font-bold">welcome back {session?.user?.name}</h1>
            <MyPost/>
            </section>
        </Layout>
       
    )
}