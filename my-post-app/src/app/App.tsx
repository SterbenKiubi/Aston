import React, { useState, useEffect } from 'react'
import { MainLayout } from '../shared/layouts/MainLayout';
import PostList from '../widgets/PostList/PostList';
import { Post } from '../entities/post/model/types';
import { mockPosts } from '../shared/api/api';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
          <PostList 
          posts={posts} 
          isLoading={loading}
          />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App;
