import { Mail, User } from "react-feather";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="card user-card">
      <div className="userimg">
        <img
          src={`https://api.lorem.space/image/face?w=150&h=150&hash=${user.username}`}
          alt=""
        />
      </div>
      <p className="username">
        <User size={20} />
        {user.username}
      </p>
      <p className="username">
        {" "}
        <Mail size={20} />
        {user.email}
      </p>
      <button className="viewprofile card">View Profile</button>
    </div>
  );
}
export default UserCard;
