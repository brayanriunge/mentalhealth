export default function Login(){
    return(
        <div className="flex h-screen bg-blue-400">
            <div className="grid grid-cols-2 bg-slate-50 m-auto w-3/5 h-3/4 rounded-md">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-md relative overflow-hidden  ">
                    <div className="bg-no-repeat bottom-0 left-0 right-0 top-0 bg-cover absolute bg-gradient-to-r from-blue-500 to-indigo-500 s"
                     style={{backgroundImage: "url(/person.jpeg)"}}
                    ></div>
                </div>
                {/* Login form */}
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">

                    </div>
                </div>
            </div>
        </div>
    )
}