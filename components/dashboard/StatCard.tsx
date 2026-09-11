import { LucideIcon } from "lucide-react";

type Props = {
    titulo: string;
    valor: string | number;
    cor?: string;
    Icone: LucideIcon;
}

export default function StatCard({ titulo, valor, cor, Icone }: Props) {
    return (
        <div className={`bg-white rounded-xl shadow-sm border border-amber-200 border-l-4 p-6 flex justify-between items-start ${cor} hover:shadow-md transition-shadow duration-300`}>
            <div>
                <h3 className="text-sm text-amber-700">{titulo}</h3>
                <p className="text-3xl font-bold text-amber-900 mt-1">{valor}</p>
            </div>
            <div className="bg-amber-100 p-2 rounded-lg">
                <Icone className="text-amber-700" size={24} />
            </div>
        </div>
    );
}