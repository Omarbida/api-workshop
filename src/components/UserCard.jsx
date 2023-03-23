import { Mail, User } from "react-feather";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="card user-card">
      <div className="userimg">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL_PROFILE_PIC}${user.id}`}
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
      <Link className="viewprofile card" to={`/user/${user.id}`}>
        View Profile
      </Link>
    </div>
  );
}
export default UserCard;
