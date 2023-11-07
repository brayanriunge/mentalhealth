import Layout from "@/components/Layout";
import MyPost from "@/components/sections/MyPost";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <Layout>
      <section className=" mx-auto mt-16  w-5/6 py-20 min-h-full">
        <h1 className="text-2xl text-montserrat font-bold">
          welcome back {session?.user?.name}
        </h1>
        <p className="text-montserrat "> My posts:</p>
        <MyPost />
      </section>
    </Layout>
  );
}
