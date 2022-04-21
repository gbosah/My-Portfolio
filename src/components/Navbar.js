import React  from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return(
       <nav className='flex z-50 items-center justify-between top-0 w-full py-10 fixed border-b h-16
       bg-gray-50 border-red-500 text-lg text-gray-700 shadow-sm font-sans font-normal'>
            <NavLink to='/' className='ml-4 pl-8 text-4xl text-black rounded-full'>
                Gbosah
            </NavLink>
            <div onClick={props.handleClick} className="px-4 cursor-pointer select-none lg:hidden">
            <i className={props.click ? "fa-solid fa-xmark  text-gray-400 text-4xl relative select-none float-right flex" : "fas fa-bars  text-gray-400 text-4xl relative select-none float-right flex"}></i>
            </div>
            <div className="pr-8 hidden lg:block">
                <NavLink to='' className='px-4 py-1 hover:bg-blue-500 hover:text-white rounded-full'>
                    Portfolio
                </NavLink>
                <NavLink to='' className='px-4 py-1 hover:bg-blue-500 hover:text-white rounded-full'>
                    Project
                </NavLink>
                <NavLink to='/AboutMe' className='px-4 py-1 hover:bg-blue-500 hover:text-white rounded-full'>
                    About  Me
                </NavLink>
                <a href='#contact' className='px-4 py-1 hover:bg-blue-500 hover:text-white rounded-full'>
                    Contact  Me
                </a>
            </div>
       </nav>
    )
}

export default Navbar