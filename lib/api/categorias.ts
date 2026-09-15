import { Categoria, CriarCategoriaInput } from "@/types/categoria";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listarCategorias(): Promise<Categoria[]> {
    const resposta = await fetch(`${API_URL}/api/categorias`);

    if (!resposta.ok) {
        throw new Error("Erro ao listar categorias");
    }

    return resposta.json();
}

export async function cadastrarCategoria(dados: CriarCategoriaInput): Promise<Categoria> {
    const resposta = await fetch(`${API_URL}/api/categorias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao cadastrar categoria");
    }

    return resposta.json();
}

export async function atualizarCategoria(id: number, dados: CriarCategoriaInput): Promise<Categoria> {
    const resposta = await fetch(`${API_URL}/api/categorias/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
    if (!resposta.ok) {
        throw new Error("Erro ao atualizar categoria");
    }
    return resposta.json();
}