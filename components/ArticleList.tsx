import ArticleItem from "./ArticleItem";
import articleStyles from "../src/styles/Article.module.css";

type Article = {
  id: number;
  title: string;
  body: string;
};

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
