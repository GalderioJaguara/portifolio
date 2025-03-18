import React from "react";
import { useForm, ValidationError} from "@formspree/react";
import { Toast } from "radix-ui";

function Contato() {
    const [formState, handleSubmit] = useForm("mgvavdvk");
    const [submitted , setSubmitted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    if(formState.succeeded){
        setSubmitted(true);
        setOpen(true);
    }



    return (
        <div className=" flex flex-col width-containers justify-center" id="contato">
            <h2 className="text-3xl font-bold mb-8">(Contato) =&gt; &#123;</h2>
            <p>Quer saber como posso ajudar você? Preencha o formulário e entrarei em contato com todos os detalhes! </p>
                <form action={handleSubmit} method="post" className="flex flex-col gap-8 mt-8 ">
                <div className="max-w-lg">
                    <label htmlFor="nome" className="block mb-2">Nome:</label>
                    <input name="nome" className="border border-solid w-full p-3 h-8 rounded-2xl shadow-sm border-slate-300 placeholder-slate-400" type="text" id="nome" placeholder="Seu nome" />
                    <ValidationError errors={formState.errors} prefix="Name" field="nome"/>
                </div>
                <div className="max-w-lg">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input name="email" className="border border-solid p-3 w-full h-8 rounded-2xl shadow-sm border-slate-300 placeholder-slate-400" type="text" id="email" placeholder="Seu melhor Email" />
                    <ValidationError errors={formState.errors} prefix="Email" field="email"/>
                </div>
                <div className="max-w-lg h-full md:mb-8">
                    <label className="block mb-2" htmlFor="mensagem">Mensagem:</label>
                    <textarea name="mensagem" className="border border-solid w-full h-[186px] rounded-2xl shadow-sm border-slate-300 p-3 placeholder-slate-400" placeholder="Sua questao" id="mensagem" ></textarea>
                    <ValidationError errors={formState.errors} prefix="Mensagem" field="mensagem"/>
                </div>
                    <button type="submit" className="max-w-lg  border-slate-300 border border-solid shadow-sm rounded-2xl bg-slate-50 bg-gradient-to-r from-slate-50 to-slate-100 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 h-8">Enviar</button>
                </form>
            <span className="text-3xl font-bold max-w-lg pt-8">&#125;;</span>
            {submitted && (
                <Toast.Provider swipeDirection="right">
                    <Toast.Root open={open} onOpenChange={setOpen}>
                        <Toast.Title>Sua Mensagem foi Enviada</Toast.Title>
                            <Toast.Description>Muito obrigado por buscar construirmos um produto juntos!</Toast.Description>
                    </Toast.Root>
                </Toast.Provider>
            )}
        </div>
    );
}

export default Contato;