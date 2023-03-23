import { useEffect } from "react";
import { Mail, Phone, User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProfilePost from "../../components/ProfilePost";
import { fetchUserPosts } from "../../slices/PostsSlice";
import { fetchUserProfile } from "../../slices/ProfileSlice";
import "./Profile.css";
function Profile() {
  const { userId } = useParams();
  const userProfile = useSelector((state) => state.userProfile);
  const userPosts = useSelector((state) => state.userPosts);
  const user = userProfile.userProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);
  return (
    <div className="profile-container">
      <div className="profile-header paper">
        <div className="profile-img">
          <img
            src={`https://api.lorem.space/image/face?w=150&h=150&hash=${user.id}`}
          />
        </div>
      </div>
      <div className="profile-main-container">
        <div className="profile-info paper">
          <p>
            <User size={20} /> {user.username}
          </p>
          <p>
            <Mail size={20} /> {user.email}
          </p>
          <p>
            <Phone size={20} />
            {user.phone}
          </p>
        </div>
        {userPosts.userPosts.map((post) => {
          return <ProfilePost key={post.id} post={post} user={user} />;
        })}
      </div>
    </div>
  );
}
export default Profile;
