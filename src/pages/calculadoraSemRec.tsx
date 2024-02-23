import { useState } from "react";
import calculoSemRecuperacao from "../common/calculoSemRecuperacao";
import Botao from "../componts/button";
import MostraNota from "../componts/mostraNota";

const CalculadoraSemRec = () => {

    const [g1, setG1] = useState<number>(0);
    const [g2, setG2] = useState<number>(0);
    const [precionado, setPrecionado] = useState<boolean>(false);

    const devolveNota = (g1: number, g2: number) => {
        return calculoSemRecuperacao(g1, g2);
    }

    let nota = devolveNota(g1, g2);

    const printaNota = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
    }

    return (
        <form className="text-base flex flex-col gap-24 items-center m-16" onSubmit={printaNota}>
            <section className="lg:flex lg:gap-48">
                <div className="py-10">
                    <label htmlFor="numero">Nota de Grau 1: </label>
                    <input className='rounded text-black text-base' type="number" onChange={(evento) => setG1(Number(evento.target.value))} id='g1' step={0.1} max={10} min={0} required />
                </div>

                <div className="py-10">
                    <label htmlFor="numero">Nota de Grau 2: </label>
                    <input className='rounded text-black text-base' type="number" onChange={(evento) => setG2(Number(evento.target.value))} id='g2' step={0.1} max={10} min={0} required />
                </div>
            </section>
            {precionado ? <MostraNota nota={nota} /> : null}
            <Botao text="Calcular média parcial" setPrecionado={setPrecionado} precionado={precionado} />
        </form>
    );
}

export default CalculadoraSemRec;