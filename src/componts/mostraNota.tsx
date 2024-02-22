import iMostraNota from "../interfaces/IMostraNota";

const MostraNota = (props: iMostraNota) => {
    return (
        <div className={`flex justify-center py-2 lg:py-20 items-center`}>
            <h2 className={`py-3 lg:py-4 rounded-full px-6 lg:px-8 text-2xl lg:text-3xl text-texto-secundario ${props.nota >= 6 ? 'bg-aprovado' : 'bg-reprovado'}`}>Nota: {props.nota}</h2>
        </div>
    );
}

export default MostraNota;