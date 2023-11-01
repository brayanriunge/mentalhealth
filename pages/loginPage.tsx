import Link from "next/link";

export default function Login(){
    return(
        <div className="flex h-screen bg-blue-400">
            <div className=" bg-slate-50 m-auto w-3/5 h-3/4 rounded-md">
                {/* <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-md relative overflow-hidden  ">
                    <div className="bg-no-repeat bottom-0 left-0 right-0 top-0 bg-cover absolute"
                     style={{backgroundImage: "url(/login.jpeg)",
                     width: "1"
                    }}
                    ></div>
                </div> */}
                {/* Login form */}
                <div className=" flex flex-col text-center gap-10 h-full rounded-md">
                    <div className="m-auto px-4 py-4">
                       <div>
                        <h1 className="font-bold text-4xl text-gray-800 font-montserrat py-4"> Login</h1>
                       </div>
                       <form className="flex flex-col gap-5 ">
                        <div className="">
                         <input
                          type="email"
                          name="email"
                          placeholder="Email"
                         />
                        </div>
                        <div className="">
                         <input
                          type="password"
                          name="password"
                          placeholder="Email"
                         />
                        </div>
                        <div className="">
                            <button type="submit" className=""> Login</button>
                        </div>
                        <div className="">
                            <button type="submit" className=""> Sign in with Google</button>
                        </div>
                       </form>
                       <p>
                        Not yet Registered 
                        <Link legacyBehavior href={"/register"} className="text-center text-gray-400">
                            <a className="text-blue-700"> Sign Up</a>
                        </Link>
                       </p>
                    </div>
                </div>
            </div>
        </div>
    )
}