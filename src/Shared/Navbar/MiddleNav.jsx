import { IoHeartOutline } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router";
const MiddleNav = () => {
  return (
    <div className="flex justify-between items-center gap-10 py-3">
      <div className="">
        <Link to={"/"}>
          <img className="" src={logo} alt="" />
        </Link>
      </div>
      {/* Search bar  */}
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow p-3" placeholder="Search Products" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    {/* Accounts Buttons */}
      <div className="flex gap-5">
      <button className="flex items-center gap-1">
        <LuUserRound className="h-8 w-8" />
        <div>
          <p>Account</p>
          <p className="font-bold text-sm">Login</p>
        </div>
      </button>
        <button className="flex items-center gap-1">
          <IoHeartOutline className="h-8 w-8" />
          <div>
            <p>Wishlist</p>
            <p className="font-bold items-center text-sm">3-Items</p>
          </div>
        </button>
        <button className="flex items-center gap-1">
          <FiShoppingCart className="h-8 w-8" />
          <div>
            <p>Account</p>
            <p className="font-bold text-sm">3-Items</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MiddleNav;
