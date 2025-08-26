import React from "react";
import './PostCard.css';

const PostCard = ( { post } ) => {
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