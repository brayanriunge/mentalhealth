import articleData from "@/articles.json";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import CardArticle from "@/components/Article/CardArticles";
import { Suspense, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Home: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      alert("Please Sign In First");
      router.push("/register");
    }
  }, [session, router]);

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <section className="mx-auto min-h-full w-5/6 py-32 mb-0">
          <motion.div
            className="grid  md:grid-cols-3 items-center justify-between gap-8 mt-2"
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.5 }}
            // variants={container}
          >
            {articleData.map((article: Article) => (
              <CardArticle
                key={article.id}
                author={article.author}
                title={article.title}
                content={article.content}
                id={article.id}
              />
            ))}
          </motion.div>
        </section>
      </Suspense>
    </Layout>
  );
};

export default Home;
