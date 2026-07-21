"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../assets/logo-caramelize.png"
import PudinsCaindo from "@/components/PudinsCaindo";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (email === "teste@email.com" && password === "123") {
            router.push("/dashboard");
        } else {
            setError("E-mail ou senha incorretos");
        }
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center relative overflow-hidden bg-amber-50">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <PudinsCaindo />
            </div>
            
            <div className="flex max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden relative z-10">
                {/*Lado do formulário*/}
                <div className="flex flex-col w-full lg:w-2/5 min-h-150 items-center justify-center bg-creme p-12">
                    {/* Título do formulário*/}
                    <div className="w-full max-w-sm space-y-8">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={Logo} alt="Logo Caramelize Puidim" className="w-40 mb-5"/>
                            <h1 className="text-amber-800 font-bold text-2xl font-sans">
                                Caramelize
                            </h1>
                        </div>

                        <div>
                            <form onSubmit={handleLogin}>
                                <label htmlFor="email" className="text-amber-800 mt-5 block">E-mail</label>
                                <input 
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Digite seu E-mail"
                                    className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full" 
                                    autoComplete="email"
                                    required
                                />

                                <label htmlFor="password" className=" text-amber-800 mt-5 block">Senha</label>
                                <input 
                                    id="password"
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Digite sua Senha"
                                    className="mt-1 rounded-lg shadow-md border border-amber-800 px-3 py-2 text-amber-800 w-full"
                                    autoComplete="current-password"
                                    required
                                />

                                <button type="submit" className="mt-5 w-full rounded-md border text-white bg-amber-800 p-2 hover:bg-amber-950 transition-colors">
                                    Entrar
                                </button>

                                {error && (
                                    <div className="rounded-lg text-center p-2 text-red-600 border mt-5" role="alert">
                                        <p>{error}</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                {/*lado da marca*/}
                <div className="hidden lg:flex lg:flex-col w-3/5 bg-amber-950 justify-between p-12">
                    <div className="flex text-creme">
                        <h1 className="font-bold">Prodly</h1>
                    </div>

                    <div>
                        <div className="flex w-full">
                            <p className="text-xs uppercase tracking-widest text-stone-400">Caramelo</p>
                        </div>            
                    </div>

                    <div className="flex">
                        <p className="text-right text-sm font-sans">Todos os direitos reservados - Caramelize Pudim</p>
                    </div>
                </div>
            </div>         
        </div>
    );
}