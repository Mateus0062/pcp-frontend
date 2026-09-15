export type Insumo = {
    id: number;
    nome: string;
    unidadeMedida: string;
    estoqueMinimo: number;
    custoUnitario: number;
    categoria: { id: number, nome: string };
};

export type CriarInsumoInput = {
    nome: string;
    unidadeMedida: string;
    estoqueMinimo: number;
    custoUnitario: number;
    categoriaId: number;
};

export type AtualizarInsumoInput = {
    nome: string;
    estoqueMinimo: number;
    custoUnitario: number;
    categoriaId: number;
};