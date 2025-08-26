import React from "react";
import PostCard from "../../entities/post/ui/PostCard";

const PostList = ( { posts } ) => {
    return (
        <div className="post-list">
            <h2>Все посты</h2>
            {posts.map((post) => (
                <PostCard 
                key={post.id}
                post={post}
                />
            ))}
        </div>
    );
};

export default PostList;