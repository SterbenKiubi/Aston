import React from 'react';
import { usePosts } from '../entities/post';
import { PostWithLoading } from '../widgets/PostList/ui/PostWithLoading';
import { mockComments } from '../shared/api/api';

export const PostsPage: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      <PostWithLoading 
        posts={posts} 
        comments={mockComments}
        isLoading={loading} 
      />
    </div>
  );
};