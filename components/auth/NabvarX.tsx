import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

interface NavbarProps {
    isLoggedIn: boolean,
    onSignOut: ()=> void
}



export default function Nav({isLoggedIn, onSignOut}:NavbarProps){

    // if(session){
    //     <>
    //        <button
    //          onClick={}
    //          className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500"
    //         >
    //             Sign Out
    //         </button>
    //     </>
    // } else{
    //     <>
    //        <Link href={"/register"}>
    //            <button
    //             className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500"
    //            >
    //             Sign Up 
    //           </button>
    //         </Link>
    //     </>
    // }

    return(
        <>
         {isLoggedIn ? (
            <>
            <h1></h1>
            <button
             onClick={onSignOut}
             className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500"
            >
                Sign Out
            </button>
            </>
            
         ):(
            <Link href={"/register"}>
             <button
              className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500"
              >
             Sign Up 
             </button>
           </Link>
         )}        
        </>
       
    )
}