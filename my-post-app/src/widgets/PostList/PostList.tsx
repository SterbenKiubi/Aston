import { PostCard } from "../../entities/post/ui/PostCard";
import { Post } from "../../entities/post/model/types";
import { FC } from "react";
import './PostList.css'

interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = (props) => {
    const { posts } = props;
    
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