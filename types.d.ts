export type InfoPage = {
  url: string;
  title: string;
  content: string;
  srcPath: string;
};

export type Post = InfoPage & {
  abstract: string;
  date: Date;
  dateFormatted: string;
};

export type Page = InfoPage | Post;
