"use client";

import ModalEditarInsumo from "@/components/insumo/ModalEditarInsumo";
import ModalCadastrarInsumo from "@/components/insumo/ModalCadastrarInsumo";
import { Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Insumo } from "@/types/insumo"

const paletas = [
    "bg-green-100 text-green-800",
    "bg-blue-100 text-blue-800",
    "bg-purple-100 text-purple-800"
]

function corDaCategoria(id: number) {
    return paletas[id % paletas.length];
}

const format = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
});

function handleDesativar(id: number) {
    console.log("desativar", id)
}

export default function InsumosPage() {
    
    const [insumoEditando, setInsumoEditando] = useState<Insumo | null>(null);
    const [cadastrando, setCadastrando] = useState(false);

    function handleEditar(Insumo: Insumo) {
        setInsumoEditando(Insumo)
    }

    const insumosMock = [
        { id: 1, nome: "Leite", unidadeMedida: "ml", estoqueMinimo: 500, custoUnitario: 4.50, categoria: { id: 1, nome: "Ingrediente" } },
        { id: 2, nome: "Forma de pudim", unidadeMedida: "un", estoqueMinimo: 50, custoUnitario: 1.20, categoria: { id: 2, nome: "Material" } },
    ];

    return (
        <div className="p-8">
            <div className="mb-8 border rounded-xl p-4 flex flex-col items-center bg-white border-amber-900">
                <h1 className="text-3xl font-bold text-amber-900">
                    Insumos
                </h1>
                <p className="text-amber-700 mt-1">
                    Gerencie os ingredientes e materiais do seu estoque.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-amber-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="px-6 py-3 text-center font-semibold text-amber-50 uppercase text-xs tracking-wider bg-amber-900">
                        <tr className="">
                            <th className="px-6 py-4">Nome</th>
                            <th className="px-6 py-4">Unidade</th>
                            <th className="px-6 py-4">Estoque Mínimo</th>
                            <th className="px-6 py-4">Custo</th>
                            <th className="px-6 py-4">Categoria</th>
                            <th className="px-6 py-4">Ações</th>
                        </tr>
                    </thead>
                    
                    <tbody className="text-center">
                        {insumosMock.map((insumo) => (
                            <tr key={insumo.id} className="border-t border-amber-100 hover:bg-amber-50 transition-colors">
                                <td className="px-6 py-4 text-amber-900">
                                    {insumo.nome}
                                </td>
                                <td className="px-6 py-4 text-amber-900">
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                        {insumo.unidadeMedida}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-amber-900">
                                    {insumo.estoqueMinimo}
                                </td>
                                <td className="px-6 py-4 text-emerald-700">
                                    {format.format(insumo.custoUnitario)}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${corDaCategoria(insumo.categoria.id)}`}>
                                        {insumo.categoria.nome}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2 justify-center">
                                        <button title="Editar Insumo" aria-label="Editar Insumo" className="p-2 rounded-lg hover:bg-amber-100 transition-colors text-amber-400" onClick={() => handleEditar(insumo)}>
                                            <Pencil size={18}/>
                                        </button>
                                        <button title="Desativar Insumo" aria-label="Desativar Insumo" className="p-2 rounded-lg hover:bg-amber-100 transition-colors text-red-600" onClick={() => handleDesativar(insumo.id)}>
                                            <Trash2 size={18}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Seção de botão para cadastrar novo insumo*/}
            <div className="w-full text-amber-800 px-4 py-2 mt-3">
                <div className="flex justify-end items-end">
                    <button onClick={() => setCadastrando(true)} title="Cadastrar Insumo" aria-label="Cadastrar Insumo" className="text-amber-50 bg-emerald-600 px-4 py-2 rounded-lg hover:scale-105 transition transform duration-300 ease-in-out">
                        Cadastrar Insumo
                    </button>
                </div>
            </div>
            
            {cadastrando && (
                <ModalCadastrarInsumo onFechar={() => setCadastrando(false)} />
            )}

            {insumoEditando && (
                <ModalEditarInsumo 
                    insumo = {insumoEditando}
                    onFechar={() => setInsumoEditando(null)}
                />
            )}
        </div>
    )
}