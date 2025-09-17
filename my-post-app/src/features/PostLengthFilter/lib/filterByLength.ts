import { Post } from '../../../entities/post/model/types';

export const filterByLength = (posts: Post[], minLength: number = 0): Post[] => {
  return posts.filter(post => post.title.length >= minLength);
};