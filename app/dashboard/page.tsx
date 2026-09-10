import StatCard from "@/components/dashboard/StatCard"
import GraficoCategorias from "@/components/dashboard/GraficoCategorias"
import { CheckCircle, Package, Tags } from "lucide-react"

export default function DashboardPage() {
    const insumosMock = [
        { id: 1, nome: "Leite", unidadeMedida: "ml", estoqueMinimo: 500, estoqueAtual: 300, custoUnitario: 4.50, categoria: { id: 1, nome: "Ingrediente" } },
        { id: 2, nome: "Forma de pudim", unidadeMedida: "un", estoqueMinimo: 50, estoqueAtual: 25, custoUnitario: 1.20, categoria: { id: 2, nome: "Material" } },
    ];

    const estoquebaixo = insumosMock.filter((insumo) => insumo.estoqueAtual < insumo.estoqueMinimo);
    
    return (
        <div className="p-8">
            <div className="items-start mb-4">
                <h1 className="text-3xl font-bold text-amber-900">
                    Dashboard
                </h1>
                <p className="text-sm text-amber-700">
                    Olá, aqui está o resumo de hoje!
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard titulo="Insumos" valor={insumosMock.length} cor="border-l-amber-500" Icone={Package} />
                <StatCard titulo="Categorias" valor={50} cor="border-l-emerald-500" Icone={Tags}/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Seção de estoque baixo */}
                <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">Insumos com Estoque Baixo</h3>
                    {estoquebaixo.length > 0 ? (
                        <ul className="space-y-2">
                            {estoquebaixo.map((insumo) => (
                                <li key={insumo.id} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                                    <span className="font-medium text-amber-900">{insumo.nome}</span>
                                    <span className="text-sm">
                                        <span className="font-bold text-red-600">{insumo.estoqueAtual}</span>
                                        <span className="text-amber-400">/{insumo.estoqueMinimo}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex items-center gap-2 text-emerald-600 py-4">
                            <CheckCircle size={20}/>
                            <span>Nenhum insumo com estoque baixo.</span>
                        </div>
                    )}
                </div>
                <GraficoCategorias />
            </div>
        </div>
    )
}