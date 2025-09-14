import React, { useState, useMemo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { Post } from "../../entities/post/model/types";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import './PostList.css';

interface PostListProps {
  posts: Post[];
  comments?: { [key: number]: any[] };
  isLoading?: boolean;
}

export const PostList: React.FC<PostListProps> = (props) => {
  const { posts, comments = {} } = props;
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, minLength);
  }, [posts, minLength]);

  const handleLengthChange = (length: number) => {
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
        {filteredPosts.map((post) => {
          const postComments = comments[post.id] || [];
          return (
            <div key={post.id} className="post-item">
              <PostCard post={post} />
              <CommentList 
                postId={post.id}
                comments={postComments}
              /> 
            </div>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>Не найдено постов с заголовком длиной от {minLength} символов</p>
          <button 
            onClick={() => setMinLength(0)}
            className="reset-filter-btn"
          >
            Показать все посты
          </button>
        </div>
      )}
    </div>
  );
};

export default withLoading(PostList);