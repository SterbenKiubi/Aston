import React, { useState } from 'react'
import MainLayout from './shared/layouts/MainLayout';
import PostList from './widgets/PostList/PostList';
import { mockPosts } from './shared/api/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setPosts(mockPosts);
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <MainLayout>
        <div className="loading">Загрузка постов...</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  )
}

export default App
