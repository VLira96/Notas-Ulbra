import { Link } from "react-router-dom";
import IButtonLinks from "../interfaces/IButtonLinks";

const ButtonLinks = (props: IButtonLinks) => {
    return (
        <Link className="m-4 w-24 lg:w-56 text-base lg:text-2xl flex items-center py-1 px-2" to={props.caminho}>
            {props.children}
        </Link>
    );
}

export default ButtonLinks;