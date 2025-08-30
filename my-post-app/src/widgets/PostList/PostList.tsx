import React from "react";
import PostCard from "../../entities/post/ui/PostCard";
import { Post } from "../../entities/post/model/types";
import './PostList.css'

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ( { posts } ) => {
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