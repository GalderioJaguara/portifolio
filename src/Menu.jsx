import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DropMenu from "./DropMenu";

function Menu() {

    const [menuMobile, setMenuMobile] = useState(false);
    const [visible, setVisible] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    function toggle() {
        if (!menuMobile) {
            setMenuMobile(true);
            setTimeout(() => setVisible(true), 30);
        } else {
            setMenuMobile(false);
            setTimeout(() => setVisible(false), 300);
        }
    }
    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
        if (windowSize > 768) {
            setVisible(false);
            setMenuMobile(false);
        }
    });

    return (
    <div className="relative">
        <MobileMenu toggleMenu={toggle} menuMobile={menuMobile} size={windowSize}/>
        {menuMobile &&  <DropMenu toggleMenu={toggle} menuMobile={menuMobile} isVisible={visible}/>}
    </div>
    )
}

export default Menu;