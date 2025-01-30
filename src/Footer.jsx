import React from "react";

function Footer(){

    const data = new Date().getFullYear();
    return (
    <footer className="h-9 width-containers py-8">
       <p className="text-slate-400 text-xs">{/* */}© 2025{/* */} Nicolas Teofilo. {/* */}All rights reserved</p>
    </footer>
    )
}
export default Footer;