import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-328px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
