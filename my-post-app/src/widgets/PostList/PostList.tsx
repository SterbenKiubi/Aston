import React, { useState, useMemo, useCallback } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { Post } from "../../entities/post/model/types";
import { FC, memo } from "react";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import './PostList.css';

interface PostListProps {
  posts: Post[];
  comments?: { [key: number]: any[] };
}

const MemoizedPostItem = memo(({ post, comments }: { post: Post; comments: any[] }) => (
  <div className="post-item">
    <PostCard post={post} />
    <CommentList 
      postId={post.id}
      comments={comments}
    /> 
  </div>
));

export const PostList: FC<PostListProps> = (props) => {
  const { posts, comments = {} } = props;
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, minLength);
  }, [posts, minLength]);

  const handleLengthChange = useCallback((length: number) => {
    setMinLength(length);
  }, []);

  const postsInfo = useMemo(() => {
    return {
      shown: filteredPosts.length,
      total: posts.length
    };
  }, [filteredPosts.length, posts.length]);

  const renderPost = useCallback((post: Post) => {
    const postComments = comments[post.id] || [];
    return (
      <MemoizedPostItem
        key={post.id}
        post={post}
        comments={postComments}
      />
    );
  }, [comments]);

  const filterComponent = useMemo(() => (
    <PostLengthFilter 
      posts={posts}
      minLength={minLength}
      onLengthChange={handleLengthChange}
    />
  ), [posts, minLength, handleLengthChange]);

  return (
    <div className="post-list">
      <h2>Все посты</h2>

      {filterComponent}

      <div className="post-list-info">
        Показано: {postsInfo.shown} из {postsInfo.total} постов
      </div>

      <div className="post-list-container">
        {filteredPosts.map(renderPost)}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>😔 Не найдено постов с заголовком длиной от {minLength} символов</p>
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

export default memo(withLoading(PostList));