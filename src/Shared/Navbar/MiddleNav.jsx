import { IoHeartOutline } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router";
const MiddleNav = () => {
  const NavItems = (
    <>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/products'}>Products</NavLink>
      <NavLink to={'/seasonal'}>Seasonal</NavLink>
      <NavLink to={'/offers'}>Offers</NavLink>
      <NavLink to={'/about'}>About Us</NavLink>
      <NavLink to={'/contact'}>Contact Us</NavLink>
    </>
  );
  return (
    <div className="flex justify-between items-center">
      {/* search section  */}
      <div className="">
      <Link to={'/'}>
        <img className="h-10 mt-4" src={logo} alt="" />
      </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
          >
            {NavItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">{NavItems}</ul>
      </div>
      <div className="flex gap-5">
        <button className="flex items-center gap-1">
          <LuUserRound className="h-8 w-8" />
          <div>
            <p>Account</p>
            <p className="font-bold text-sm">Login</p>
          </div>
        </button>
        <button className="flex items-center gap-1">
        <IoHeartOutline  className="h-8 w-8"/>
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
