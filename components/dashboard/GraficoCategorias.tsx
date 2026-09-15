"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    dados: { categoria: string; value: number }[];
};

export default function GraficoCategorias({ dados}: Props) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">
                Insumos por categoria
            </h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dados}>
                    <XAxis dataKey="categoria"/>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#b45309" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}