"use client" 
import { FormEvent, useState, useEffect } from "react";
import { Insumo } from "@/types/insumo"
import { X } from "lucide-react";
import { Categoria } from "@/types/categoria";
import { listarCategorias } from "@/lib/api/categorias";
import { atualizarInsumo } from "@/lib/api/insumos";

type Props = {
    insumo: Insumo;
    onFechar: () => void;
    onEditado: () => void;
};

export default function ModalEditarInsumo({ insumo, onFechar, onEditado }: Props) {
    
    // Inicio Listar Categorias
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    
    useEffect(() => {
        listarCategorias().then((categorias) => setCategorias(categorias)).catch((error) => {
            console.error("Erro ao listar categorias: ", error);
        });
    }, []);
    // Fim Listar Categorias 
    
    const [nome, setNome] = useState(insumo.nome);
    const [estoqueMinimo, setEstoqueMinimo] = useState(insumo.estoqueMinimo);
    const [custoUnitario, setCustoUnitario] = useState(insumo.custoUnitario);
    const [categoriaId, setCategoriaId] = useState(insumo.categoria.id);

    const handlerAtualizar = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await atualizarInsumo(insumo.id, {
                nome,
                estoqueMinimo: Number(estoqueMinimo),
                custoUnitario: Number(custoUnitario),
                categoriaId: Number(categoriaId),
            });
            onEditado();
            onFechar();
        } catch(error) {
            console.error("Erro: ", error)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="bg-amber-900 rounded-lg py-3 px-4 flex items-center justify-between">
                    <h2 className="text-creme">
                        Editar insumo
                    </h2>

                    <button className="text-amber-900 bg-creme border border-amber-950 rounded-lg p-2 hover:scale-105 transition transform duration-300 ease-in-out" onClick={onFechar}>
                        <X size={18}/>
                    </button>
                </div>

                <div>
                    <form onSubmit={handlerAtualizar} >
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
                                onChange={(e) => setEstoqueMinimo(Number(e.target.value))}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="0"
                            />

                            <label htmlFor="custoUnitario" className="text-sm font-medium text-amber-700">Custo Unitario</label>
                            <input 
                                id="custoUnitario"
                                type="number"
                                value={custoUnitario}
                                onChange={(e) => setCustoUnitario(Number(e.target.value))}
                                className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                placeholder="0"
                            />

                            <label htmlFor="categoria" className="text-sm font-medium text-amber-700">Categoria</label>
                            <select value={categoriaId} onChange={(e) => setCategoriaId(Number(e.target.value))} className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full">
                                {categorias.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.nome}</option>
                                ))}
                            </select>
                        </div>
                        
                        <button type="submit" className="mt-5 w-full rounded-md border text-white bg-amber-800 p-2 hover:bg-amber-950 transition-colors">Atualizar Insumo</button>
                    </form>            
                </div>
            </div>
        </div>
    )
}