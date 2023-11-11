// pages/index.tsx
import Link from "next/link";
import { NextPage } from "next";
import { getArticles } from "@/hooks/getData";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface HomeProps {
  articles: Article[];
}
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <Layout>
      <section className="mx-auto min-h-full w-5/6 py-32 mb-4">
        <h1>Articles</h1>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-yellow-400 py-16 px-5 text-center"
          >
            <h1>Articles</h1>
            <div>
              {articles.map((article) => (
                <>
                  <div className="mb-4 flex justify-center" key={article.id}>
                    <h2>{article.title}</h2>
                  </div>
                  <h4 className="font-bold">Author: {article.author}</h4>
                  <p className="my-3">{article.content}</p>
                  <p>{article.content.slice(0, 100)}...</p>
                  <Link href={`/article/${article.id}`}>
                    <p>Read more</p>
                  </Link>
                </>
              ))}
            </div>
          </motion.div>
          {/* <div>
          <h1>Articles</h1>
          <div className="">
            {articles.map((article) => (
              <div key={article.id} className="">
                <h2>{article.title}</h2>
                <p>Author: {article.author}</p>
                <p>{article.content.slice(0, 100)}...</p>
                <Link href={`/article/${article.id}`}>
                  <p>Read more</p>
                </Link>
              </div>
            ))}
          </div>
        </div> */}
        </motion.div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getArticles();

  return {
    props: {
      articles: data?.articles || [],
    },
  };
}

export default Home;
