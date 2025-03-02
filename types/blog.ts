export interface Blog {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  categories: number[];
  tags: number[];
  _links: {
    'wp:featuredmedia': [
      {
        embeddable: boolean;
        href: string;
      }
    ]
  }
}

export interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

export interface BlogHeaderProps {
  title: string;
  featuredImage: string | undefined;
  publishedDate: string;
  contentLength: number;
}