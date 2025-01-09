import DashboardPage from "./DashboardPage";
import AddUserPage from "./AddUserPage";
import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div>
      {/* <DashboardPage></DashboardPage> */}
      {/* <AddUserPage></AddUserPage> */}
      <Outlet />
    </div>
  );
}
