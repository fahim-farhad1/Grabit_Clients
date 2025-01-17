import Rapper from "../../Components/Rapper";
import MainNav from "./MainNav";
import MiddleNav from "./MiddleNav";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <div className="">
      <TopNavbar />
      <Rapper>
        <div className="fixed z-10 top-0 w-[1265px] bg-white">
        <MiddleNav />
        </div>
        <MainNav />
      </Rapper>
    </div>
  );
};

export default Navbar;
