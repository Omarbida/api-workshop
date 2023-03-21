import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { fetchUsers } from "../slices/UsersSlice";
import "./users.css";
const Users = () => {
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1 className="head">Users</h1>
      <div className="container">
        {(!usersState.isLoading &&
          usersState?.users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })) || <h1>loading...</h1>}
      </div>
    </div>
  );
};
export default Users;
