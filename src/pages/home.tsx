const Home = () => {
    return (
        <div className="p-10 flex items-center flex-col gap-10">
            <h1 className="text-5xl">Novo sistema de nota</h1>

            <p className="text-xl">Neste novo semestre, foi implementado um sistema de avaliação mais complexo, o que pode representar um desafio adicional para os alunos. Por esse motivo, desenvolvi esta calculadora de notas para auxiliar na administração das suas disciplinas.</p>

            <p className="text-xl">A nova metodologia de avaliação considera o seguinte: a nota de Grau 1, com peso 1, somada à nota de Grau 2, com peso 2. Sua nota semestral será a média ponderada dessas notas. Caso não alcance a média 6, você terá a oportunidade de fazer uma recuperação. Nesse caso, sua nota final será a média ponderada entre a nota original, com peso 1, e a nota da recuperação, com peso 2.</p>
        </div>
    )
}

export default Home;