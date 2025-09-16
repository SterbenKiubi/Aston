import { useState, useEffect } from 'react';
import { Post } from '../model/types';
import { mockPosts } from '../../../shared/api/api';

export const usePost = (postId?: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;

      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundPost = mockPosts.find(p => p.id === parseInt(postId));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Пост не найден');
        }
      } catch (err) {
        setError('Ошибка при загрузке поста');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, loading, error };
};