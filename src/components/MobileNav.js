import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileNav(props) {
    return(
        <div className={props.click ? 'fixed w-9/12 z-50 box-border gap-6 text-gray-800 pr-8 pl-4 bg-gray-100 justify-items-start grid top-20 text-sm pt-6 pb-12 grid-rows-4 border-b' : 'hidden'} onClick={props.handleClick} style={{margin:1}}>

            <NavLink className='mt-1 border-b w-full max-h-7 px-2 my-2 hover:bg-purple-600 hover:text-white rounded-full border-purple-500 font-sans font-medium' to='' onClick={props.closeMenu}>
                 Portfolio
            </NavLink>
            <NavLink className='border-b w-full max-h-7 px-2 my-2 hover:bg-purple-600 hover:text-white rounded-full border-purple-500 font-sans font-medium' to='' onClick={props.closeMenu} >
                 Project
            </NavLink>
            <NavLink className='border-b w-full max-h-7 px-2 my-2 hover:bg-purple-600 hover:text-white rounded-full border-purple-500 font-sans font-medium' to='/AboutMe' onClick={props.closeMenu}>
                 About Me
            </NavLink>
            <NavLink className='border-b w-full max-h-7 px-2 my-2 hover:bg-purple-600 hover:text-white rounded-full border-purple-500 font-sans font-medium' to='/Contact' onClick={props.closeMenu}>
                 Contact Me
            </NavLink>
        </div>
    )
}