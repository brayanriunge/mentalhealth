// pages/index.tsx
import Link from "next/link";
import { NextPage } from "next";
import { getArticles } from "@/hooks/getData";
import Layout from "@/components/Layout";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface HomeProps {
  articles: Article[];
}

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <Layout>
      <section className="mx-auto min-h-full w-5/6 py-20 mb-4">
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
