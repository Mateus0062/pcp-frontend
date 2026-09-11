"use client";
import { Pencil, Trash2 } from "lucide-react"
import { useState } from "react";
import ModalCadastrarCategoria from "@/components/categoria/ModalCadastrarCategoria";
import { Categoria } from "@/types/categoria";
import ModalEditarCategoria from "@/components/categoria/ModalEditarCategoria";

export default function CategoriasPage() {

    const categoriasMock = [
        { id: 1, nome: "Ingrediente" },
        { id: 2, nome: "Material" }
    ]

    const [cadastrando, setCadastrando] = useState(false);
    const [categoriaEditando, setCategoriaEditando] = useState<Categoria | null>(null);

    return (
        <div className="p-8">
            <div className="mb-8 border rounded-xl p-4 flex flex-col items-center bg-white border-amber-900">
                <h1 className="text-3xl font-bold text-amber-900">
                    Categorias
                </h1>
                <p className="text-amber-700 mt-1">
                    Gerencie as categorias de insumos do seu estoque.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-amber-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="px-6 py-3 text-center font-semibold text-amber-50 uppercase text-xs tracking-wider bg-amber-900">
                        <tr>
                            <th className="px-6 py-4">Nome</th>
                            <th className="px-6 py-4">Ações</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {categoriasMock.map((categoria) => (
                            <tr key={categoria.id} className="border-t border-amber-100 hover:bg-amber-50 transition-colors">
                                <td className="px-6 py-4 text-amber-900">
                                    {categoria.nome}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2 justify-center">
                                        <button onClick={() => setCategoriaEditando(categoria)} title="Editar Categoria" aria-label="Editar Categoria" className="p-2 rounded-lg hover:bg-amber-100 transition-colors text-amber-400">
                                            <Pencil size={18}/>
                                        </button>
                                        <button title="Desativar Categoria" aria-label="Desativar Categoria" className="p-2 rounded-lg hover:bg-amber-100 transition-colors text-red-600">
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
                    <button onClick={() => setCadastrando(true)} title="Cadastrar Categoria" aria-label="Cadastrar Categoria" className="text-amber-50 bg-emerald-600 px-4 py-2 rounded-lg hover:scale-105 transition transform duration-300 ease-in-out">
                        Cadastrar Categoria
                    </button>
                </div>
            </div>
            
            {cadastrando && (
                <ModalCadastrarCategoria onFechar={() => setCadastrando(false)} />
            )}

            {categoriaEditando && (
                <ModalEditarCategoria categoria={categoriaEditando} onFechar={() => setCategoriaEditando(null)} />
            )}

        </div>
    )
}