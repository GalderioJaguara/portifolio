import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import logo from "/nicolas-logo2.svg"
import { IoCloseOutline } from "react-icons/io5";


function MobileMenu(props) {

    return(
        <div className={`block md:hidden w-full max-w-7xl z-50 px-8  transition-all ease-in"`} >
        <nav className="flex justify-between items-center p-8 bg-gradient-to-r from-neutral-50 to-slate-200/55  rounded-2xl  border mt-4 border-slate-400 h-11 text-black backdrop-blur-md shadow-sm"> 
            <img src={logo} alt="logo-nicolas" width="50" height="50" className={`${props.size < 375 ? "w-[90px] h-[32px]" : "w-[140px] h-[49px]"}`}/>
           { props.menuMobile == true ? <IoCloseOutline onClick={props.toggleMenu} /> : <CiMenuBurger id="menu" onClick={props.toggleMenu}/> }
        </nav>
    </div>
    );
}

export default MobileMenu;