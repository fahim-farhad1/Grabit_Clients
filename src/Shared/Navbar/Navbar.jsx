import Container from "../../Components/Container/Container";
import Rapper from "../../Components/Rapper";
import MainNav from "./MainNav";
import MiddleNav from "./MiddleNav";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <div className="">
      <TopNavbar />
      <Container>
        <div className="fixed z-50 left-0 px-20 top-0 w-full bg-white">
        <MiddleNav />
        </div>
        <MainNav />
      </Container>
    </div>
  );
};

export default Navbar;
