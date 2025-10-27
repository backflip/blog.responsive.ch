export type Page = {
  url: string;
  title: string;
  content: string;
  srcPath: string;
};

export type Post = Page & {
  abstract: string;
  date: Date;
  dateFormatted: string;
};
