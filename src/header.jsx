import React from "react";
import logo from "/nicolas-logo2.png"
import { HiLanguage } from "react-icons/hi2";
import Menu from "./Menu";


function Header() {
    

    return (
    
    <header className="md:w-full max-w-7xl z-50 px-8 mb-8">
        <Menu />
        <nav className="hidden md:flex justify-between items-center p-8 bg-gradient-to-r from-neutral-50 to-slate-200/55  rounded-2xl  border mt-4 border-slate-400 h-11 text-black backdrop-blur-md shadow-sm">
            <div className="flex ">
                <img src={logo} alt="logo-nicolas" className="w-[140px] h-[49px]"/>
                <ul className="flex gap-4 ml-4 items-center">
                    <li><a href="#sobre" className="hover:text-slate-300">Sobre</a></li>
                    <li><a href="#tecnologias" className="hover:text-slate-300">Tecnologias</a></li>
                    <li><a href="#projetos" className="hover:text-slate-300">Projetos</a></li>
                    <li><a href="#contato" className="hover:text-slate-300">Contato</a></li>
                </ul>
            </div>
            <button><HiLanguage className="hover:text-slate-300"/></button>
        </nav>
    </header>
    );
}

export default Header;