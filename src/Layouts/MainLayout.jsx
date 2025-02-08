import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const MainLayout = () => {
  const [scrollDirection, setScrollDirection] = useState("up"); // Default to up
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling up
        setScrollDirection("up");
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
  return (
    <div>
      <Navbar />
      <div
        className={`min-h-[calc(100vh-328px)] ${
          scrollDirection === "down" ? "mt-[140px]" : ""
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
