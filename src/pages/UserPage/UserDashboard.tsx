import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>Hello, UserDashboard!</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default UserDashboard;
