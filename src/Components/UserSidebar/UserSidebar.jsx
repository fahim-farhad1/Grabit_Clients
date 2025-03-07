import { NavLink } from "react-router";
import useUsers from "../../Hooks/useUsers";
import Loading from "../Loading/Loading";

const UserSidebar = () => {
  const [users] = useUsers();

  if (!users) {
    return <Loading />;
  }

  return (
    <div className="w-[350px] space-y-5">
      {/* User Profile */}
      <div className="flex gap-3 items-center bg-white p-3 shadow-md rounded w-full">
        <img className="rounded-full h-14 w-14" src={users?.image} alt="" />
        <span className="text-sm">
          Hello,{" "}
          <p className="text-lg font-semibold text-secondary">{users.name}</p>
        </span>
      </div>

      {/* Sidebar Menus */}
      <div className="flex flex-col">
        <NavLink to="/userDashboard/account">
          {({ isActive }) => (
            <button
              className={`p-3 w-full text-start border ${
                isActive ? " text-primary" : "bg-white text-secondary"
              }`}
            >
              My Account
            </button>
          )}
        </NavLink>

        <NavLink to="/userDashboard/orders">
          {({ isActive }) => (
            <button
              className={`p-3 w-full text-start border ${
                isActive ? "bg-red-500 text-white" : "bg-white text-secondary"
              }`}
            >
              My Orders
            </button>
          )}
        </NavLink>

        <NavLink to="/userDashboard/wishlist">
          {({ isActive }) => (
            <button
              className={`p-3 w-full text-start border ${
                isActive ? "bg-red-500 text-white" : "bg-white text-secondary"
              }`}
            >
              My Wishlist
            </button>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default UserSidebar;
