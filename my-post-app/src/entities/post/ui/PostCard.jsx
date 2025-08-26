import React from "react";
const PostCard = ( {post} ) => {
    return (
        <div className="card">
            <h3 className="title">{post.title}</h3>
            <p className="userId">{post.userId}</p>
            <p className="id">{post.id}</p>
            <p className="body">{post.body}</p>
        </div>
    )
};

export default PostCard;