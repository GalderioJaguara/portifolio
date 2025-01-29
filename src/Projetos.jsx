import React from "react";
import ProjectsCard from "./ProjectsCard";
import projects from "./projects";



function Projetos() {
    return(
       
        <div className="flex flex-col width-containers pb-8" id="projetos">
            <h2 className="text-3xl font-bold">(Projetos) =&gt; &#123;</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8 justify-items-center items-center h-full">
                {projects.map((project) => (
                <ProjectsCard key={project.id} title={project.title} img={project.img} description={project.description} type={project.type} techs={project.techs} url={project.url}/>
                 ))}
                </div>
            <span className="text-3xl font-bold mt-auto">&#125;;</span>
        </div>
       
    );
}

export default Projetos;