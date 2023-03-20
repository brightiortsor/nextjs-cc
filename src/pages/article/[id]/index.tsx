import Link from "next/link";

type Article = {
  id: number;
  title: string;
  body: string;
};

type ArticleProps = {
  article: Article;
};

const article = ({ article }: ArticleProps) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getServerSideProps = async (context: { params: { id: any } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
