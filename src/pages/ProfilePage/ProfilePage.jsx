import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
const ProfilePage = () => {
  useProtectedPage();
  return <div>ProfilePage</div>;
};
export default ProfilePage;
