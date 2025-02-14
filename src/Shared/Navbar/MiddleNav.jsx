import { IoHeartOutline } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { FaAngleDown } from "react-icons/fa6";
const MiddleNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const {
    register,
    formState: { errors },
  } = useForm();
  // click out side to drop down
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    console.log("count")
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [user]);

  return (
    <div ref={dropdownRef} className="flex justify-between items-center py-5">
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
      <div className="flex gap-2">
        {user ? (
          <button
            onClick={() => setOpen(!open)}
            className="flex gap-1 items-center"
          >
            <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
            <span className="text-secondary text-sm text-start">
              <p>Hello,</p>
              <p >{user.displayName}</p>
            </span>
            <FaAngleDown className="text-secondary" />
          </button>
        ) : (
          <Link to="/login">
            <button className="flex items-center gap-1">
              <LuUserRound className="h-8 w-8" />
              <div>
                <span>
                  <p className="font-bold text-sm">Login</p>
                </span>
              </div>
            </button>
          </Link>
        )}
        <div 
          className={`absolute mt-[40px] bg-base-100 w-[150px] h-fit z-20 p-2 rounded transition-all duration-300 ease-in-out shadow-md border ${
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
          }`}
        >
          <div  className="flex flex-col items-start gap-2">
            <button className=" text-secondary hover:text-primary w-full text-left ">Profile</button>
            <button className=" text-secondary hover:text-primary w-full text-left ">Order</button>
            <button className=" text-secondary hover:text-primary w-full text-left " onClick={handleLogOut}>Log Out</button>
          </div>
        </div>

        <button className="flex items-center gap-1">
          <IoHeartOutline className="h-8 w-8" />
          <div>
            <p className="font-bold text-[12px] bg-red-500 text-white px-[7px] py-[2px] rounded-full absolute top-[12px] right-[132px]">
              3
            </p>
          </div>
        </button>
        <button className="flex items-center gap-1 relative">
          <FiShoppingCart className="h-8 w-8" />
          <div>
            <p className="font-bold text-[12px] bg-red-500 text-white px-[7px] py-[2px] rounded-full absolute -top-[12px] -right-[12px]">
              3
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MiddleNav;
