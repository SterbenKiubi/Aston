import { Post } from '../../../entities/post/model/types';

export const getAvailableLengths = (posts: Post[]): number[] => {
  const lengths = posts.map(post => post.title.length);
  const uniqueLengths = Array.from(new Set(lengths)).sort((a, b) => a - b);
  
  const standardOptions = [0, 10, 20, 30, 40, 50];
  const allOptions = [...new Set([...standardOptions, ...uniqueLengths])];
  
  return allOptions.filter(length => length <= Math.max(...uniqueLengths));
};