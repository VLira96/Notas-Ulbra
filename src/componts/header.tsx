import ButtonLinks from "./buttonLinks";

const Header = () => {
    return (
        <header className="bg-secundaria h-20 flex items-center justify-center">
            <nav className="flex gap-2 lg:gap-48 m-4">
                <ButtonLinks caminho='/'>Entenda a nota</ButtonLinks>
                <ButtonLinks caminho='/nota/semrecuperacao'>Nota sem recuperação</ButtonLinks>
                <ButtonLinks caminho='/nota/comrecuperacao'>Nota com recuperação</ButtonLinks>
            </nav>
        </header>
    );
}

export default Header;