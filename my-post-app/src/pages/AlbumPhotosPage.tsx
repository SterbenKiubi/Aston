import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const AlbumPhotosPage: React.FC = () => {
  const { albumId } = useParams();

  return (
    <div>
      <Link to="/">← На главную</Link>
      <h1>Фотографии альбома #{albumId}</h1>
      <p>Страница в разработке...</p>
    </div>
  );
};