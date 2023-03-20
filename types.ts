export type Article = {
  id: number;
  title: string;
  body: string;
};

export type ArticlesProps = {
  articles: Article[];
};
