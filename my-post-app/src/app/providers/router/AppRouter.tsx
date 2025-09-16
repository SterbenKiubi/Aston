import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostsPage } from '../../../pages/PostsPage';
import { PostDetailsPage } from '../../../pages/PostDetailsPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage';
import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage';
import { UserTodosPage } from '../../../pages/UserTodosPage';
import { UserPostsPage } from '../../../pages/UserPostsPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { MainLayout } from '../../../shared/layouts/MainLayout';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PostsPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
        <Route path="users/:userId/albums" element={<UserAlbumsPage />} />
        <Route path="albums/:albumId/photos" element={<AlbumPhotosPage />} />
        <Route path="users/:userId/todos" element={<UserTodosPage />} />
        <Route path="users/:userId/posts" element={<UserPostsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};