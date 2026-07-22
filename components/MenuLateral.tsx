"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo-caramelize.png";

export default function MenuLateral() {
    const pathname = usePathname();

    const itens = [
        {href: "/dashboard", label: "Início"},
        {href: "/dashboard/insumos", label: "Insumos"},
        {href: "/dashboard/categorias", label: "Categorias"}
    ];

    return(
        <aside className="w-64 flex flex-col bg-creme rounded-lg">
            <div className="border-b border-amber-800 p-4 flex flex-col items-center justify-center">
                <Image src={Logo} alt="Imagem Logo Caramelize" className="h-auto w-24 mb-5"/>
                    
                <div className="text-center font-bold text-amber-800">
                    <h1>Dashboard</h1>
                </div>
            </div>
            
            <nav className="flex flex-col gap-2 p-4">
                {itens.map((item) => {
                    const ativo = pathname === item.href;
                    return (
                        <Link 
                            key={item.href}
                            href={item.href}
                            className={ativo ? "bg-amber-800 text-creme rounded-lg px-4 py-2 text-center" : "border border-amber-800 text-amber-800 rounded-lg px-4 py-2 hover:bg-amber-800 hover:text-creme hover:scale-105 transition transform duration-300 ease-in-out text-center"}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}