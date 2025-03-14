import { useEffect, useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import AiIcon from "../../assets/icons/chatbot.png";
import { Link, NavLink } from "react-router";
import useCategories from "../../Hooks/useCategories";


const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const MainNav = () => {
  const [Categories] = useCategories();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("up"); // Default to up
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling up
        setScrollDirection("up");
        setOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection("down");
      }

      setLastScrollY(currentScrollY);
    };

    // Debounce scroll event
    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 

  // navItems for the navbar
  const NavItems = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `relative pb-1 hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-secondary"
          } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-primary after:transition-all 
    hover:after:w-full`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `relative pb-1 hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-secondary"
          } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-primary after:transition-all 
    hover:after:w-full`
        }
      >
        Products
      </NavLink>
      <NavLink
        to={"/seasonal"}
        className={({ isActive }) =>
          `relative pb-1 hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-gray-600"
          } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-primary after:transition-all 
    hover:after:w-full`
        }
      >
        Seasonal
      </NavLink>
      <NavLink
        to={"/offers"}
        className={({ isActive, isPending }) =>
          `relative pb-1 hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-secondary"
          } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-primary after:transition-all 
    hover:after:w-full`
        }
      >
        Offers
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `relative pb-1 hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-secondary"
          } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-primary after:transition-all 
    hover:after:w-full`
        }
      >
        About Us
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `relative pb-1 hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-secondary"
          } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-primary after:transition-all 
    hover:after:w-full`
        }
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <div
      className={`bg-white w-full flex items-center justify-between gap-5 mt-20 py-2 transition-transform duration-300 ${
        scrollDirection === "down"
          ? "fixed -top-[10px] left-0 right-0 z-40 px-20 transform translate-y-1 duration-300"
          : "relative"
      }`}
    >
      <div className="relative inline-block text-left" ref={dropdownRef}>

        {/* All categories dropdown */}
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

        <div
          className={`absolute left-0 mt-2 bg-base-100 w-[250px] h-[500px] overflow-y-auto z-20 p-2 rounded transition-all duration-300 ease-in-out shadow-md border ${
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
          }`}
        >
          {Categories.map((category) => (
            <Link to={`/products/${category.name}`}><div key={category.id} className="flex items-center gap-2">
            <button
            onClick={() => setOpen(false)}
              key={category._id}
              className="group text-secondary hover:text-primary hover:font-semibold p-2 w-full text-left hover:bg-white hover:border border-primary rounded flex justify-between items-center hover:shadow "
            >
              {category.name}
              <FaAngleRight className="opacity-0  transition-opacity h-6 w-6 group-hover:opacity-100" />
            </button>
          </div></Link>
          ))}
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">{NavItems}</ul>
      </div>

      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="bg-primary py-2 px-2 rounded w-[220px] flex gap-1 items-center text-white"
      >
        <img className="h-8 w-8 -mt-[3px]" src={AiIcon} alt="" />
        <p className=" mt-1 font-semibold">AI Shopping Assistant</p>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle hover:bg-red-500 btn-ghost hover:text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-primary text-lg">AI Shopping Assistant - Coming Soon!</h3>
          <p className="py-4 text-secondary font-semibold">Smart Shopping Just Got Smarter!</p>
          <p className="text-sm">We're working on an advanced AI Shopping Assistant to help you find the best products effortlessly. Soon, you'll be able to:</p>
          <ol className="mt-2 text-sm">
            <li>✅ Get personalized recommendations</li>
            <li>✅ Compare products instantly</li>
            <li>✅ Find the best deals with AI-powered insights</li>
          </ol>
        </div>
      </dialog>
    </div>
  );
};

export default MainNav;
