import { Comment } from "./comment.model";
export interface Post {

  userId: number,
  id: number,
  title: string;
  body: string;

  comments: Array<Comment>;

}
