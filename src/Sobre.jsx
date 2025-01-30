import React from "react";
import avatarNicolas from "/avatar2.webp"

function Sobre() {
    return (
        <div className="my-8 flex flex-col justify-center width-containers" id="sobre">
            <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-center gap-8 h-full">
                     <div className="max-w-[310px] lg:max-w-[400px] m-auto">
                        <img src={avatarNicolas} loading="lazy" alt="Nicolas Avatar" className="rounded-full border-solid border-black border-2"/>
                   </div>
                <div className="max-w-3xl my-8">
                    <h2 className="text-3xl font-bold mb-8">(Sobre) =&gt; &#123; </h2>
                        <p><span>Oi! Eu sou Nicolas Teofilo</span>, estudante de Analise e desenvolvimento de sistemas. Como desenvolvedor freelancer, minha missão é transformar ideias em soluções digitais funcionais e encantadoras.</p>
                        <p>Com experiência em tecnologias como <span>ReactJS</span> no front-end e <span>NodeJS</span> no back-end, já ajudei diversos projetos a ganharem vida com eficiência e inovação. Meu foco está em criar aplicações ágeis, intuitivas e escaláveis, sempre alinhadas às necessidades dos meus clientes.</p>
                
                    <p>Acredito que tecnologia não é apenas uma ferramenta, mas um meio de <span>resolver problemas reais e criar oportunidades</span>. Vamos construir algo incrível juntos?</p>
                </div>
                   
            </div>
               <span className="text-3xl font-bold">&#125;;</span>
        </div>
    );
}

export default Sobre;