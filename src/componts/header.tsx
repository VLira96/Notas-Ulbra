import ButtonLinks from "./buttonLinks";

const Header = () => {
    return (
        <header className="bg-secundaria h-18 flex items-center justify-center">
            <nav className="flex gap-2 lg:gap-48 m-4">
                <ButtonLinks caminho='/' text='Entenda a nota' />
                <ButtonLinks caminho='/nota/semrecuperacao' text='Nota sem recuperação' />
                <ButtonLinks caminho='/nota/comrecuperacao' text='Nota com recuperação' />
            </nav>
        </header>

    )
}

export default Header;