import React, { useState } from "react";

function TechStack(props){
    const [filter, setFilter] = useState("");
    const [filterText, setFilterText] = useState("");
    function handleFilter() {
        setFilter("drop-shadow-lg");
        setFilterText("drop-shadow-md");

    }
    function removeFilter(){
        setFilter("");
        setFilterText("");
    }
    return (
        <div className="border-solid border-2 border-slate-200 p-8 w-[165px] h-[165px] bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl hover:scale-125 ease-out transition shadow-sm " onMouseOver={handleFilter} onMouseOut={removeFilter}>
            <div className={`flex flex-col items-center gap-4 ${filter} ease-out transition`}>
                <img src ={props.icon} className="tech-icons" alt={props.description}/>
                <p className={filterText}>{props.description}</p>
            </div>
        </div>
    );
}

export default TechStack;