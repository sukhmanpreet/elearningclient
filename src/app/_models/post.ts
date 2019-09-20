import {Tag} from './tag';

export class Post {
  postID: number;
  name: string;
  type: string;
  content: string;
  url: string;
  liked: boolean;
  tags: Tag[];
}
