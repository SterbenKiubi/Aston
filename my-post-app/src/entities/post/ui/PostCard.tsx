import React from "react";
import { Post } from "../model/types";
import './PostCard.css';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ( { post } ) => {
    return (
        <div className="card">
            <h3 className="title">title: {post.title}</h3>
            <p className="userId">userId: {post.userId}</p>
            <p className="id">id: {post.id}</p>
            <p className="body">body: {post.body}</p>
        </div>
    )
};

export default PostCard;