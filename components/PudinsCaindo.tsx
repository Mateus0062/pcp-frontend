function pseudoAleatorio(i: number, semente: number) {
    // 1: Seno do índice multiplicado pela semente
    const extrairSeno = Math.abs(Math.sin(i * semente));
    // 2: multiplica o resultado por um número grande
    const result = extrairSeno * 1561816.1616
    // 3: devolve só a parte fracionária, em valor absoluto
    const parteInteira = Math.floor(result);
    const parteDecimal = result - parteInteira;

    return parteDecimal
}

export default function PudinsCaindo() {
    const pudins = Array.from({length: 50}, (_, i) => ({
        left: Number((pseudoAleatorio(i, 12.9898) * 100).toFixed(2)),
        duracao: Number((12 + pseudoAleatorio(i, 78.233) * 8).toFixed(2)),
        delay: Number((-(pseudoAleatorio(i, 43.123) * 20)).toFixed(2)),
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {pudins.map((p, i) => (
                <span key={i} className="absolute animate-cair" style={{
                    left: `${p.left}%`,
                    animationDuration: `${p.duracao}s`,
                    animationDelay: `${p.delay}s`,
                }}>
                    🍮
                </span>
            ))}
        </div>
    );
}