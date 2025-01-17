import { BiCategory } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
const MainNav = () => {
  return (
    <div className="bg-white w-full flex items-center justify-between gap-5 mt-20">
         <button className="bg-primary py-2 px-2 rounded w-[250px]">
            <span className="text-white flex gap-1 items-center">
            <BiCategory className="h-5 w-5"/>
            <p className=" font-semibold">All Categorys</p>
            <FaAngleDown />
            </span>
          </button>
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
      <button className="bg-primary py-2  px-2 rounded w-[250px]">
            <span className="text-white flex gap-1 items-center">
            <BiCategory className="h-5 w-5"/>
            <p className=" font-semibold">All Categorys</p>
            <FaAngleDown />
            </span>
          </button>
    </div>
  );
};

export default MainNav;
