function Comment(props) {
  return (
    <div className="comment paper">
      <div className="comment-head">
        <div className="comment-prof-pic">
          <img
            src={`https://api.lorem.space/image/face?w=150&h=150&hash=${props.comment.id}`}
          />
        </div>
        <p>{props.comment.name}</p>
      </div>
      <p className="comment-comment paper">{props.comment.body}</p>
    </div>
  );
}
export default Comment;
