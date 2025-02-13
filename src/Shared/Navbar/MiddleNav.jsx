import { IoHeartOutline } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
const MiddleNav = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex justify-between items-center gap-10 py-3">
      <div>
        <Link to="/">
          <img className="h-10 w-40" src={logo} alt="Grabit Logo" />
        </Link>
      </div>
      {/* Search bar */}
      <div className="flex items-center gap-2 w-6/12">
        <input
          className="py-2 px-5 border bg-white rounded-3xl focus:outline-primary w-full"
          {...register("search")}
          placeholder="Search Products"
        />
      </div>
      {/* Account Buttons */}
      <div className="flex gap-5">
       <Link to='/login'> <button className="flex items-center gap-1">
          <LuUserRound className="h-8 w-8" />
          <div>
            <p>Account</p>
            <p className="font-bold text-sm">Login</p>
          </div>
        </button></Link>
        <button className="flex items-center gap-1">
          <IoHeartOutline className="h-8 w-8" />
          <div>
            <p>Wishlist</p>
            <p className="font-bold text-sm">3 Items</p>
          </div>
        </button>
        <button className="flex items-center gap-1">
          <FiShoppingCart className="h-8 w-8" />
          <div>
            <p>Cart</p>
            <p className="font-bold text-sm">3 Items</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MiddleNav;
