export interface Comment {
  parent?: Comment;
  children?: Comment[];
  author: string;
  body: string;
  score: number;
  created: string | Date;
}
