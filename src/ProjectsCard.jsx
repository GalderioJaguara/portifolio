import React from "react";


function ProjectsCard(props){
    return (
        <div className="border-slate-200 border-solid border-2 p-8 rounded-2xl shadow-sm bg-gradient-to-r from-slate-50 to-slate-100">
            <div className="">
                <img src ={props.img} alt={props.title} className="object-contain md:object-cover rounded-2xl"/>
                <h3 className="text-xl font-bold pt-4 pb-2">{props.title}</h3>
                <p className="pb-4">{props.description}</p>
                <div className="flex items-center ">
                {props.techs.map((tech) => (
                    <span className="border border-slate-300 p-2 mr-2 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 w-[135px] text-center shadow-sm">{tech} </span>
                ))}   
                </div>
                <span className="block mt-4 text-slate-400 text-sm">{props.type}</span>
            </div>
        </div>
    );
}

export default ProjectsCard;