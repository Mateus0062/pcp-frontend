import { AtualizarInsumoInput, CriarInsumoInput, Insumo } from "@/types/insumo";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listarInsumos(): Promise<Insumo[]> {
    const resposta = await fetch(`${API_URL}/api/insumos`);
    
    if (!resposta.ok) {
        throw new Error("Erro ao listar insumos");
    }

    return resposta.json();
}

export async function cadastrarInsumo(dados: CriarInsumoInput): Promise<Insumo> {
    const resposta = await fetch(`${API_URL}/api/insumos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao cadastrar insumo");
    }

    return resposta.json();
}

export async function atualizarInsumo(id: number, dados: AtualizarInsumoInput): Promise<Insumo> {
    const resposta = await fetch(`${API_URL}/api/insumos/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao atualizar insumo");
    }

    return resposta.json();
}