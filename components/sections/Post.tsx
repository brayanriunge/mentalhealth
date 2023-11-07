import Link from "next/link"


export default function Post({name, postTitle, id,comment}:any){
    return(
        <div className="my-8 p-8 mb-0 rounded-xl bg-white">
            <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-700">
                    {name}
                </h3>
            </div>
            <div className="my-8">
                <p className="break-all">{postTitle}</p>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <Link href={`/post/${id}`}>
                    <p className="text-gray-700 text-sm font-bold">{comment.length} Comments</p>
                </Link>
            </div>
        </div>
    )
}