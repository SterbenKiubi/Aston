import React from 'react';
import { usePosts } from '../entities/post/api/usePosts';
import PostList from '../widgets/PostList/PostList';
import { mockComments } from '../shared/api/api';

export const PostsPage: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      <PostList 
        posts={posts} 
        comments={mockComments}
        isLoading={loading} 
      />
    </div>
  );
};