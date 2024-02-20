import { Link } from "react-router-dom";
import IButtonLinks from "../interfaces/IButtonLinks";

const ButtonLinks = (props: IButtonLinks) => {
    return (
        <Link className="m-4 w-24 lg:w-56 text-base py-1 px-2" to={props.caminho}>
            {props.text}
        </Link>
    )
}

export default ButtonLinks;