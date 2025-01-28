import React from "react";


function Contato() {
    return (
        <div className="my-8 h-[80dvh] flex flex-col px-8 justify-center" id="contato">
            <h2 className="text-3xl font-bold mb-8">(Contato) =&gt; &#123;</h2>
            <p>Quer saber como posso ajudar você? Preencha o formulário e entrarei em contato com todos os detalhes! </p>
                <form action="/" method="post" className="flex flex-col gap-8 mt-8">
                <div className="max-w-lg">
                    <label htmlFor="nome" className="block mb-2">Nome:</label>
                    <input className="border border-solid w-full p-2 h-8 rounded-2xl shadow-sm border-slate-300 placeholder-slate-400" type="text" id="nome" placeholder="Seu nome" />
                </div>
                <div className="max-w-lg">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input className="border border-solid p-2 w-full h-8 rounded-2xl shadow-sm border-slate-300 placeholder-slate-400" type="text" id="email" placeholder="Seu melhor Email" />
                </div>
                <div className="max-w-lg">
                    <label className="block mb-2" htmlFor="mensagem">Mensagem:</label>
                    <textarea className="border border-solid w-full h-full rounded-2xl shadow-sm border-slate-300 p-2 placeholder-slate-400" placeholder="Sua questao" id="mensagem" ></textarea>
                </div>
                    <button type="submit" className="max-w-lg mt-8 border-slate-300 border border-solid shadow-sm rounded-2xl bg-slate-50 bg-gradient-to-r from-slate-50 to-slate-100 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 h-8">Enviar</button>
                </form>
            <span className="text-3xl font-bold mt-auto max-w-lg">&#125;;</span>
        </div>
    );
}

export default Contato;