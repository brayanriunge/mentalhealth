// pages/article/[id].tsx
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getArticles } from "@/hooks/getData";
import Layout from "@/components/Layout";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface ArticlePageProps {
  article: Article | null;
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <section className=" mx-auto mt-16  w-5/6 py-20 min-h-full">
        <div>
          <h1>{article.title}</h1>
          <p>Author: {article.author}</p>
          <p>{article.content}</p>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await getArticles();

  const paths =
    data?.articles.map((article: any) => ({
      params: { id: article.id.toString() },
    })) || [];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const data = await getArticles();
  const article =
    data?.articles.find((a: any) => a.id === parseInt(params.id, 10)) || null;

  return {
    props: {
      article,
    },
  };
}

export default ArticlePage;
