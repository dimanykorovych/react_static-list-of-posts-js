import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      return <PostInfo key={post.id} post={post} comments={postComments} />;
    })}
  </div>
);
