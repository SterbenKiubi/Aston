import { PostCard } from "../../entities/post/ui/PostCard";
import { Post } from "../../entities/post/model/types";
import { FC } from "react";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import './PostList.css';

interface PostListProps {
  posts: Post[];
  comments?: { [key: number]: any[] };
}

export const PostList: FC<PostListProps> = (props) => {
    const { posts, comments = {} } = props;
    
    return (
        <div className="post-list">
            <h2>Все посты</h2>
            <div className="post-list-container">
                {posts.map((post) => (
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