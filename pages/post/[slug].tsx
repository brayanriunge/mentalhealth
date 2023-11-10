import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PostData } from "@/pages/community";
import Post from "@/components/sections/Post";
import AddComment from "@/components/sections/AddComment";
import Link from "next/link";

export default function PostDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [postData, setPostData] = useState<PostData>();

  const fetchDetails = async () => {
    try {
      const response = await fetch(`/api/posts/${slug}`);
      const data = await response.json();
      console.log(data);
      setPostData(data);
    } catch (error) {
      console.error("Error fetching Comments", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [slug]);

  return (
    <Layout>
      {postData && (
        <section className="mx-auto  w-5/6 ">
          {/* {postData?.comment.map((post)=> <Post name={post.user.name} id={postData.id} postTitle={postData.title} comment={postData.comment}/>)} */}
          <section className="mx-auto  w-5/6 py-20 mb-5">
            <div className="my-8 p-8 mb-0  rounded-xl bg-white">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-700">
                  {postData?.user.name}
                </h3>
              </div>
              <div className="my-8">
                <p className="break-all">{postData?.title}</p>
              </div>
              <div className="flex items-center gap-4 cursor-pointer">
                <p className="text-gray-700 text-sm font-bold ">
                  {postData?.comment.length} Comments
                </p>
              </div>
            </div>
          </section>
          {/* Add comment section */}
          <AddComment postId={slug} fetchDetails={fetchDetails} />
          <section className="pb-2">
            {postData?.comment.map((comment) => (
              <div className="p-8 mt-6 rounded-md bg-white " key={comment.id}>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{comment.user.name}</h3>
                  <h2 className="text-sm">{comment.createdAt}</h2>
                </div>
                <div className="mt-8">{comment.message}</div>
              </div>
            ))}
          </section>
        </section>
      )}
    </Layout>
  );
}
