export interface Comment {
  parent: Comment;
  children?: Comment[];
  user: string;
  body: string;
  created: Date;
}
