import React from 'react';
import { Post } from '../../../entities/post/model/types';
import { getAvailableLengths } from '../lib/getAvailableLengths';
import { filterByLength } from '../lib/filterByLength';

interface PostLengthFilterProps {
  posts: Post[];
  minLength: number;
  onLengthChange: (length: number) => void;
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ 
  posts, 
  minLength, 
  onLengthChange 
}) => {
  const availableLengths = getAvailableLengths(posts);
  const filteredPostsCount = filterByLength(posts, minLength).length;

  return (
    <div>
      <label>
        Фильтр по длине заголовка:
        <select 
          value={minLength} 
          onChange={(e) => onLengthChange(Number(e.target.value))}
        >
          {availableLengths.map(length => (
            <option key={length} value={length}>
              {length === 0 ? 'Все посты' : `${length}+ символов`}
            </option>
          ))}
        </select>
      </label>
      
      <div>
        Показано: {filteredPostsCount} из {posts.length} постов
      </div>
    </div>
  );
};