import React from "react";

function DropMenu(props) {
    return(
        <div className="block absolute md:hidden w-full max-w-7xl z-50 px-8 mb-8">
               <div className={`flex justify-between items-center p-8 bg-gradient-to-r from-neutral-50 to-slate-200/55  rounded-2xl  border mt-4 border-slate-400 h- text-black backdrop-blur-md shadow-sm transition-opacity duration-300 ease-in-out transform ${
        props.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}> 
                <ul className="flex flex-col gap-4 ml-4 items-start">
                    <li><a href="#sobre" className="hover:text-slate-300" onClick={props.toggleMenu}>Sobre</a></li>
                    <li><a href="#tecnologias" className="hover:text-slate-300" onClick={props.toggleMenu}>Tecnologias</a></li>
                    <li><a href="#projetos" className="hover:text-slate-300" onClick={props.toggleMenu}>Projetos</a></li>
                    <li><a href="#contato" className="hover:text-slate-300" onClick={props.toggleMenu}>Contato</a></li>
                </ul>
               </div>
           </div>
    )
}

export default DropMenu;