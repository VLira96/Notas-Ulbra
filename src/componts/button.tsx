import IBotao from "../interfaces/IBotao";

const Botao = (props: IBotao) => {
    return (
        <button className="bg-secundaria py-2 rounded-8 hover:bg-hover rounded-full px-4" onClick={() => props.setPrecionado(true)} type="submit">{props.text}</button>
    );
}

export default Botao;