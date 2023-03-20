import Link from "next/link";
import articleStyles from "../src/styles/Article.module.css";

type Article = {
  id: number;
  title: string;
  body: string;
};

type ArticleItemProps = {
  article: Article;
};

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link href={`/article/${article.id}`} className={articleStyles.card}>
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
