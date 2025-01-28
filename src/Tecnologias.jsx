import React from "react";
import TechStack from "./TechStack";
import icons from "./techIcons";


function Tecnologias(){
   return (
    <div className="my-8 lg:h-[80dvh] flex flex-col px-8 justify-center" id="tecnologias">
        <h2 className="text-3xl font-bold">(Techs) =&gt; &#123;</h2>
       <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 py-8 gap-8 justify-items-center items-center h-full">
        {icons.map((icon) => (
            <TechStack key={icon.id} icon={icon.icon} description={icon.description}/>
        ))}
       </div>
       <span className="text-3xl font-bold mt-auto">&#125;;</span>
    </div>
   );
}

export default Tecnologias;