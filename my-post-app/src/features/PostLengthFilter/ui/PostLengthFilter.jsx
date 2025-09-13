import React from 'react';
import { getAvailableLengths } from '../lib/filterByLength';

export const PostLengthFilter = ({ posts, minLength, onLengthChange }) => {
  const availableLengths = getAvailableLengths(posts);

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
        Показано: {posts.filter(post => post.title.length >= minLength).length} из {posts.length} постов
      </div>
    </div>
  );
};