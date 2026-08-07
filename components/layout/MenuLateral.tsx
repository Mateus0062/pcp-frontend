"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo-caramelize.png";
import {House, Package, Tags } from "lucide-react";

export default function MenuLateral() {
    const pathname = usePathname();

    const itens = [
        {href: "/dashboard", label: "Início", Icone: House},
        {href: "/dashboard/insumos", label: "Insumos", Icone: Package},
        {href: "/dashboard/categorias", label: "Categorias", Icone: Tags}
    ];

    return(
        <aside className="w-64 flex flex-col bg-creme ">
            <div className="border-b border-amber-800 p-4 flex flex-col items-center justify-center">
                <Image src={Logo} alt="Imagem Logo Caramelize" className="h-auto w-24 mb-5"/>
                    
                <div className="text-center font-bold text-amber-800">
                    <h1>Dashboard</h1>
                </div>
            </div>
            
            <nav className="flex flex-col gap-2 p-4">
                {itens.map((item) => {
                    const Icone = item.Icone;
                    const ativo = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
                    return (
                        <Link 
                            key={item.href}
                            href={item.href}
                            className={ativo ? "bg-amber-800 text-creme rounded-lg px-4 py-2 flex items-center justify-center gap-3" : "border border-amber-800 text-amber-800 rounded-lg px-4 py-2 hover:bg-amber-800 hover:text-creme hover:scale-105 transition transform duration-300 ease-in-out flex items-center justify-center gap-3"}
                        >
                            <Icone size={20} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}