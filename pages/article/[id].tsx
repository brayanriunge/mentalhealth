// pages/article/[id].tsx

import { useRouter } from "next/router";
import articleData from "@/articles.json";
import Layout from "@/components/Layout";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articleData.find(
    (article: Article) => String(article.id) === String(id)
  );

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <section className=" mx-auto mt-16  w-5/6 py-20 min-h-full">
        <div className="bg-white rounded-md shadow-md p-5 text-montserrat">
          <h1 className="text-bold text-2xl">{article.title}</h1>
          <p className="text-lg">Author: {article.author}</p>
          <div>
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlePage;
