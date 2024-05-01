
import { navbar } from '../../constants'
import { NavLink } from 'react-router-dom'

const NavbarList = () => {
  return (
    <div className="sm:flex md:gap-10 hidden gap-2 md:justify-between items-center text-base">                    
    {
     navbar.map(item=> <NavLink key={item.route} to={item.route}>{item.label}</NavLink>)
    }
 </div>
  )
}

export default NavbarList