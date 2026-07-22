export default function InsumosPage() {
    
    const insumosMock = [
        { id: 1, nome: "Leite", unidadeMedida: "ml", estoqueMinimo: 500, custoUnitario: 4.50, categoria: { id: 1, nome: "Ingrediente" } },
        { id: 2, nome: "Forma de pudim", unidadeMedida: "un", estoqueMinimo: 50, custoUnitario: 1.20, categoria: { id: 2, nome: "Material" } },
    ];

    return (
        <div className="p-8 w-full flex flex-col gap-8">
            <div className="px-6 py-8 border-2 rounded-xl border-amber-800/20 bg-white shadow-sm flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-bold text-amber-900 mb-2">
                    Insumos
                </h1>
                <p className="text-amber-700 font-medium">
                    Gerencie os ingredientes e materiais do seu estoque.
                </p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-md border border-amber-800 bg-white">
                <table className="w-full text-left border-collapse">
                    {/* Cabeçalho mais escuro para contrastar com o texto claro */}
                    <thead className="bg-amber-800 text-amber-50 uppercase text-sm font-semibold tracking-wider">
                        <tr>
                            <th className="py-4 px-6">Nome</th>
                            <th className="py-4 px-6">Unidade</th>
                            <th className="py-4 px-6">Estoque Mínimo</th>
                            <th className="py-4 px-6">Custo</th>
                            <th className="py-4 px-6">Categoria</th>
                        </tr>
                    </thead>
                    
                    {/* Corpo da tabela recolocado */}
                    <tbody className="text-sm text-amber-950 divide-y divide-amber-200">
                        {insumosMock.map((insumo) => (
                            <tr key={insumo.id} className="hover:bg-amber-50 transition-colors">
                                <td className="py-4 px-6 font-semibold">
                                    {insumo.nome}
                                </td>
                                <td className="py-4 px-6">
                                    <span className="bg-amber-200 text-amber-900 px-2 py-1 rounded-md text-xs font-bold uppercase border border-amber-300">
                                        {insumo.unidadeMedida}
                                    </span>
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    {insumo.estoqueMinimo}
                                </td>
                                <td className="py-4 px-6 font-bold text-emerald-700">
                                    {new Intl.NumberFormat('pt-BR', { 
                                        style: 'currency', 
                                        currency: 'BRL' 
                                    }).format(insumo.custoUnitario)}
                                </td>
                                <td className="py-4 px-6">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border 
                                        ${insumo.categoria.nome === 'Ingrediente' 
                                            ? 'bg-orange-100 text-orange-800 border-orange-200' 
                                            : 'bg-yellow-100 text-yellow-800 border-yellow-200'}`}
                                    >
                                        {insumo.categoria.nome}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}