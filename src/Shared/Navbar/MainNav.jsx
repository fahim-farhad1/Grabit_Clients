import useCategories from "../../Hooks/useCategories";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const MainNav = () => {
  const [Categories] = useCategories();
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="bg-white w-full flex items-center justify-between gap-5 mt-20">
      <div className="relative inline-block text-left">
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary py-2 px-2 rounded w-[180px] flex gap-1 items-center text-white font-semibold"
        >
          <BiCategory className="h-5 w-5" />
          <p>All Categories</p>
          <FaAngleDown
            className={`transition-transform duration-500 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute left-0 mt-2 bg-base-100 w-[250px] h-fit z-50 p-2 rounded transition-all duration-300 ease-in-out shadow-md border ${
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
          }`}
        >
          {Categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <button
                key={category._id}
                className="group text-secondary hover:text-primary hover:font-semibold p-2 w-full text-left hover:bg-white hover:border border-primary rounded flex justify-between items-center hover:shadow "
              >
                {category.name}
                <FaAngleRight className="opacity-0  transition-opacity h-6 w-6 group-hover:opacity-100" />
              </button>
            </div>
          ))}
        </div>
      </div>
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
          <BiCategory className="h-5 w-5" />
          <p className=" font-semibold">All Categorys</p>
          <FaAngleDown />
        </span>
      </button>
    </div>
  );
};

export default MainNav;
