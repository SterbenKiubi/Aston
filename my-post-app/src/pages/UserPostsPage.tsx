import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const UserPostsPage: React.FC = () => {
  const { userId } = useParams();

  return (
    <div>
      <Link to="/">← На главную</Link>
      <h1>Посты пользователя #{userId}</h1>
      <p>Страница в разработке...</p>
    </div>
  );
};