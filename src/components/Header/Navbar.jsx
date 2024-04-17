import { TiLocationArrowOutline } from "react-icons/ti"
import { MdDarkMode } from "react-icons/md";
import { BsCloudRain } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { TbWind } from "react-icons/tb";
import { navbar } from "../../constants";
import Logo from "./Logo";
import NavbarList from "./NavbarList";
import NavbarOption from "./NavbarOption";


function Navbar() {


    return (
        <nav className=" flex items-center justify-between w-full h-20 text-xl md:px-20 px-1">
            <Logo />
            <NavbarList />
            <NavbarOption />
        </nav>

    );
}

export default Navbar;