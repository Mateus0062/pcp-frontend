"use client" 
import { FormEvent, useState, useEffect } from "react";
import { X } from "lucide-react";
import { listarCategorias } from "@/lib/api/categorias";
import { Categoria } from "@/types/categoria";
import { cadastrarInsumo } from "@/lib/api/insumos";

type Props ={
    onFechar: () => void;
    onCadastrado: () => void;
}

export default function ModalCadastrarInsumo({ onFechar, onCadastrado }: Props) {
    
    const [categorias, setCategorias ] = useState<Categoria[]>([]);

    useEffect(() => {
        listarCategorias().then((categorias) => setCategorias(categorias)).catch(console.error);
    }, []);

    useEffect(() => {
        if (categorias.length > 0 && categoriaId === "") {
            setCategoriaId(String(categorias[0].id));
        }
    }, [categorias]);

    const [nome, setNome] = useState("");
    const [estoqueMinimo, setEstoqueMinimo] = useState("");
    const [custoUnitario, setCustoUnitario] = useState("");
    const [unidadeMedida, setUnidadeMedida] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    const handlerCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await cadastrarInsumo({
            nome,
            unidadeMedida,
            estoqueMinimo: Number(estoqueMinimo),
            custoUnitario: Number(custoUnitario),
            categoriaId: Number(categoriaId),
        });
        onCadastrado();
        onFechar();
    } catch (error) {
        console.error("Erro:", error);
    }
};

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="bg-amber-900 rounded-lg py-3 px-4 flex items-center justify-between">
                    <h2 className="text-creme">
                        Cadastrar insumo
                    </h2>

                    <button className="text-amber-900 bg-creme border border-amber-950 rounded-lg p-2 hover:scale-105 transition transform duration-300 ease-in-out" onClick={onFechar}>
                        <X size={18}/>
                    </button>
                </div>

                <div>
                    <form onSubmit={handlerCadastrar} >
                        <div className="mt-4 mb-2">
                            <label htmlFor="nome" className="text-sm font-medium text-amber-700 mt-2">Nome</label>
                            <input 
                                type="text" 
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="Ex: Leite Condensado"
                            />

                            <label htmlFor="estoqueMin" className="text-sm font-medium text-amber-700">Estoque Mínimo</label>
                            <input 
                                id="estoqueMin"
                                type="number"
                                value={estoqueMinimo}
                                onChange={(e) => setEstoqueMinimo(e.target.value)}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="0"
                            />

                            <label htmlFor="custoUnitario" className="text-sm font-medium text-amber-700">Custo Unitário</label>
                            <input 
                                id="custoUnitario"
                                type="number"
                                value={custoUnitario}
                                onChange={(e) => setCustoUnitario(e.target.value)}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="0"
                            />

                            <label htmlFor="unidadeMedida" className="text-sm font-medium text-amber-700">Unidade de Medida</label>
                            <input 
                                id="unidadeMedida"
                                type="text"
                                value={unidadeMedida}
                                onChange={(e) => setUnidadeMedida(e.target.value)}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="Ex: kg, L, un"
                            />

                            <label htmlFor="categoria" className="text-sm font-medium text-amber-700">Categoria</label>
                            <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full">
                                {categorias.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.nome}</option>
                                ))}
                            </select>
                        </div>
                        
                        <button type="submit" className="mt-5 w-full rounded-md border text-white bg-amber-800 p-2 hover:bg-amber-950 transition-colors">Cadastrar Insumo</button>
                    </form>            
                </div>
            </div>
        </div>
    )
}