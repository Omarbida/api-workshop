function Comment(props) {
  return (
    <div className="comment paper">
      <div className="comment-head">
        <div className="comment-prof-pic">
          <img
            src={`${import.meta.env.VITE_BASE_API_URL_PROFILE_PIC}${
              props.comment.id
            }`}
          />
        </div>
        <p>{props.comment.name.substring(0, 15)}</p>
      </div>
      <p className="comment-comment paper">{props.comment.body}</p>
    </div>
  );
}
export default Comment;
