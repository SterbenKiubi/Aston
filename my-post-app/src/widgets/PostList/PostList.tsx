import React, { useMemo } from "react";
import { PostCard } from "../../entities/post";
import { Post } from "../../entities/post"; 
import { Comment } from "../../shared/api/api";
import { CommentList } from "../CommentList/ui/CommentList";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import './PostList.css';

interface PostListProps {
  posts: Post[];
  comments?: { [key: number]: Comment[] };
}

export const PostList: React.FC<PostListProps> = ({ posts, comments = {} }) => {
  const [minLength, setMinLength] = React.useState(0);

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