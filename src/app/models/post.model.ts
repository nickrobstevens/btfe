import { Comment } from "./comment.model";
export interface Post {

  userId: number,
  id: number,
  title: string;
  body: string;

  // Comments on a single post
  comments: Array<Comment>;

}
