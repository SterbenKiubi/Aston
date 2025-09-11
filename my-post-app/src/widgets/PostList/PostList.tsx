import React, { useState, useMemo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { Post } from "../../entities/post/model/types";
import { FC } from "react";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import './PostList.css';

interface PostListProps {
  posts: Post[];
  comments?: { [key: number]: any[] };
}

export const PostList: FC<PostListProps> = (props) => {
    const { posts, comments = {} } = props;
    const [ minLength, setMinLength ] = useState(0);

    const filteredPosts = useMemo(() => {
    return filterByLength(posts, minLength);
  }, [posts, minLength]);

  const handleLengthChange = (length) => {
    setMinLength(length);
  };
    
    return (
        <div className="post-list">
            <h2>Все посты</h2>

            <PostLengthFilter 
                posts={posts}
                minLength={minLength}
                onLengthChange={handleLengthChange}
            />

            <div className="post-list-container">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="post-item">
                        <PostCard 
                            key={post.id}
                            post={post}
                        />
                        <CommentList 
                            postId={post.id}
                            comments={comments[post.id]}
                        /> 
                    </div>
                         
            ))}
            </div>
        </div>
    );
};

export default withLoading(PostList);