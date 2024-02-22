import calculoSemRecuperacao from "./calculoSemRecuperacao";

const calculoComRecuperacao = (g1: number, g2: number, r: number) => {
    return (calculoSemRecuperacao(g1, g2) + r * 2) / 3;
}

export default calculoComRecuperacao;