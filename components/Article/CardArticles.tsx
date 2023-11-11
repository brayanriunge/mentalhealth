import Link from "next/link";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  id: number;
  author: string;
  content: string;
  title: string;
};

export default function CardArticle({ id, author, content, title }: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-yellow-400 py-16 px-5 text-center"
    >
      <div className="mb-4 flex justify-center" key={id}>
        <h2>{title}</h2>
      </div>
      <h4 className="font-bold">Author: {author}</h4>
      <p className="my-3">{content}</p>
      <p>{content.slice(0, 100)}...</p>
      <Link href={`/article/${id}`}>
        <p>Read more</p>
      </Link>
    </motion.div>
  );
}
