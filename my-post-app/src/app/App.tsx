import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { RouterProvider } from './providers/router/RouterProvider';
import { AppRouter } from './providers/router/AppRouter';
import { mockPosts, mockComments } from '../shared/api/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
      setComments(mockComments);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <RouterProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </RouterProvider>
  );
}

export default App;
