import React from 'react'
import { MdDarkMode } from 'react-icons/md'
import { TiLocationArrowOutline } from 'react-icons/ti'

const NavbarOption = () => {
    return (
        <div className="flex items-center md:gap-4 gap-1">
            <button ><MdDarkMode className="text-purple" /></button>
            <div className=" flex items-center  text-base py-1  px-1">
                <TiLocationArrowOutline className="text-3xl text-purple" />
                <label htmlFor="" className="text-gray">Location</label>
                <input type="text" className="lg:w-20 w-8" />
            </div>
        </div>
    )
}

export default NavbarOption