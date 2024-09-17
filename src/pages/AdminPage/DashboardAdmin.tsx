import { Outlet } from "react-router-dom";

const DashboardAdmin = () => {
  return (
    <div>
      <h1>Welcome Admin Page</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardAdmin;
