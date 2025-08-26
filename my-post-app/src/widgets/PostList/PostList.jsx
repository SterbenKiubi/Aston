import React from "react";
import PostCard from "../../entities/post/ui/PostCard";
import './PostList.css'

const PostList = ( { posts } ) => {
    return (
        <div className="post-list">
            <h2>Все посты</h2>
            <div className="post-list-container">
                {posts.map((post) => (
                <PostCard 
                key={post.id}
                post={post}
                />
            ))}
            </div>
        </div>
    );
};

export default PostList;