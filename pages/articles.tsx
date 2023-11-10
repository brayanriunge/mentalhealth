// pages/index.tsx
import Link from "next/link";
import { NextPage } from "next";
import { getArticles } from "@/hooks/getData";

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
    <div>
      <h1>Articles</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>{article.content.slice(0, 100)}...</p>
            <Link href={`/article/${article.id}`}>
              <a>Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
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
