import React from 'react';
import { Post } from '../model/types';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className={styles.card}>
            <h3 className="title">title: {post.title}</h3>
            <p className="userId">userId: {post.userId}</p>
            <p className="id">id: {post.id}</p>
            <p className="body">body: {post.body}</p>
        </div>
    )
};