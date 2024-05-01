
import Logo from "./Logo";
import NavbarList from "./NavbarList";
import NavbarOption from "./NavbarOption";
import { NavMobile } from "./navbarMobile";


function Navbar() {


    return (
        <nav className="flex items-center justify-between w-12/12 h-20 text-xl px-1">
            
            <Logo />
            <NavMobile/>
            <NavbarList />
            <NavbarOption />
        </nav>

    );
}

export default Navbar;