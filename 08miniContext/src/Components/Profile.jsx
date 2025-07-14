import React, { useContext } from "react";
import userContext from "../context/usercontext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div><b>Please Log In</b></div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
