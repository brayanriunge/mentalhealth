import { NextPage } from "next";
import { getArticles } from "@/hooks/getData";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import CardArticle from "@/components/Article/CardArticles";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface HomeProps {
  articles: Article[];
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <Layout>
      <section className="mx-auto min-h-full w-5/6 py-32 mb-0">
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {articles.map((article) => (
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
