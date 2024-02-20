import { useState } from "react";
import calculoSemRecuperacao from "../common/calculoSemRecuperacao";

const CalculadoraSemRec = () => {

    const [g1, setG1] = useState<number>(0);
    const [g2, setG2] = useState<number>(0);

    const devolveNota = (g1: number, g2: number) => {
        return calculoSemRecuperacao(g1, g2);
    }

    const printaNota = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        alert('nota: ' + devolveNota(g1, g2));
    }

    return (
        <form className="flex flex-col m-16" onSubmit={printaNota}>
            <div className="py-10">
                <label htmlFor="numero">Nota de Grau 1: </label>
                <input type="number" onChange={(evento) => setG1(Number(evento.target.value))} id='g1' step={0.1} max={10} min={0} required />
            </div>

            <div className="py-10">
                <label htmlFor="numero">Nota de Grau 2: </label>
                <input type="number" onChange={(evento) => setG2(Number(evento.target.value))} id='g2' step={0.1} max={10} min={0} required />
            </div>

            <button className="bg-secundaria py-2 rounded-8 hover:bg-hover" type="submit">Calucular nota semestral</button>
        </form>
    )
}

export default CalculadoraSemRec;