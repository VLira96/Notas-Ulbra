import { IBotao } from "../interfaces/IBotao";

const Botao = (props: IBotao) => {
    return (
        <button className="bg-secundaria py-2 rounded-8 hover:bg-hover rounded-full p-4" type="submit">{props.text}</button>
    )
}

export default Botao;