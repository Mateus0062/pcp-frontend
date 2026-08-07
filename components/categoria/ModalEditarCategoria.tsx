"use client" 
import { FormEvent, useState } from "react";
import { X } from "lucide-react";
import { Categoria } from "@/types/categoria";

type Props ={
    categoria: Categoria;
    onFechar: () => void;
}

export default function ModalEditarCategoria({ categoria, onFechar }: Props) {
    const [nome, setNome] = useState(categoria.nome);

    const handlerEditar = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const resposta  = await fetch(`http://localhost:8080/api/categorias/${categoria.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    nome, 
                   
                })
            });
            
            if(!resposta.ok) {
                const erro = await resposta.json();
                console.error("Erro da API: ", erro);
                return
            }

            onFechar();
            const data = await resposta.json();

        } catch(error) {
            console.error("Erro: ", error)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="bg-amber-900 rounded-lg py-3 px-4 flex items-center justify-between">
                    <h2 className="text-creme">
                        Editar Categoria
                    </h2>

                    <button className="text-amber-900 bg-creme border border-amber-950 rounded-lg p-2 hover:scale-105 transition transform duration-300 ease-in-out" onClick={onFechar}>
                        <X size={18}/>
                    </button>
                </div>

                <div>
                    <form onSubmit={handlerEditar} >
                        <div className="mt-4 mb-2">
                            <label htmlFor="nome" className="text-sm font-medium text-amber-700 mt-2">Nome</label>
                            <input 
                                type="text" 
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="Ex: Material, Ingrediente"
                            />
                        </div>
                        
                        <button type="submit" className="mt-5 w-full rounded-md border text-white bg-amber-800 p-2 hover:bg-amber-950 transition-colors">Editar Categoria</button>
                    </form>            
                </div>
            </div>
        </div>
    )
}