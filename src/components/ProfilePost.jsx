import { Link } from "react-router-dom";

function ProfilePost(props) {
  return (
    <div className="post paper">
      <div className="post-img">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL_POST_IMG}${props.post.id}`}
          alt=""
        />
      </div>
      <div className="post-info">
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        <Link to={`/user/${props.user.id}/${props.post.id}`}>View Post</Link>
      </div>
    </div>
  );
}
export default ProfilePost;
