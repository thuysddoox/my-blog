export interface Tag {
  id?: string;
  name: string;
  summary?: string;
  slug?: string;
  color: {
    hex: string;
  };
  articles?: Article[];
}

export interface Article {
  id?: string;
  title?: string;
  slug?: string;
  thumbnails?: string[];
  content?: {
    html: string;
  };
  tags?: Tag[];
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: Comment[];
}

export interface Comment {
  id?: string;
  content: string;
  name: string;
  email: string[];
  createdAt?: string;
  article?: Article;
  replyForComments: Comment;
}
