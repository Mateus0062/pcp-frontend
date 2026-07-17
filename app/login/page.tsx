"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import '../globals.css';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (email === "teste@email.com" && password === "123") {
            router.push("/page");
        } else {
            setError("Email or password is incorrect");
        }
    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-100">
            {/* Esta div é a div do container inteiro*/}
            <div className="w-full max-w-md rounded-lg shadow-md bg-amber-500 items-center justify-center p-8">
                {/* Esta div irá conter o título do formulário*/}
                <div className="mb-5 text-center">
                    <h1 className="text-2xl font-bold text-amber-950">Prodly - Controle de Inventário</h1>
                    <p className="text-sm text-amber-200 mt-2">Acesse o sistema para gerenciar seu patrimônio</p>
                </div>

                {/* Aqui embaixo irá o formulário*/}
                <form onSubmit={handleLogin} className="space-y-6 bg-amber-50 p-6 rounded-lg">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        E-mail
                    </label>
                    <input 
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border border-gray-300"
                        placeholder="Digite seu E-mail"
                        required 
                    />
                </form>
            </div>
        </div>
    );
}