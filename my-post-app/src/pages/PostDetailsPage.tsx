import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePost } from '../entities/post/api/usePost';

export const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { post, loading, error } = usePost(id);

  if (loading) return <div>Загрузка поста...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!post) return <div>Пост не найден</div>;

  return (
    <div>
      <Link to="/posts">← Назад к списку постов</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Автор: пользователь #{post.userId}</p>
    </div>
  );
};