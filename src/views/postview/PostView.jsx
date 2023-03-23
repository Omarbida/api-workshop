import "./PostView.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchUserProfile } from "../../slices/ProfileSlice";
import { fetchPost } from "../../slices/PostSlice";
import { MessageSquare, Share2, ThumbsUp } from "react-feather";
import { fetchComments } from "../../slices/CommentsSlice";
import Comment from "../../components/Comment";

function PostView() {
  const { userId, postId } = useParams();
  const user = useSelector((state) => state.userProfile.userProfile);
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  return (
    <div className="post-view-container">
      <div className="post-view-main-container paper">
        <div className="post-view-header">
          <div className="post-view-profile-pic">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL_PROFILE_PIC}${user.id}`}
            />
          </div>
          <p>{user.username}</p>
        </div>
        <div className="post-view-img">
          <img
            src={`${import.meta.env.VITE_BASE_API_URL_POST_IMG}${postId}`}
          ></img>
        </div>
        <div className="post-view-post-info">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <div className="post-controls">
          <button title="Like">
            <ThumbsUp size={30} />
          </button>
          <button title="Comment">
            <MessageSquare size={30} />
          </button>
          <button
            onClick={() => navigator.share({ url: window.location })}
            title="Share"
          >
            <Share2 size={30} />
          </button>
        </div>
      </div>
      <p className="comments--">Comments:</p>
      <div className="post-view-comments">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
}
export default PostView;
