import { Link } from "react-router-dom"
import { BsPlusSquare } from "react-icons/bs";

export const TechList = () => {
    return(
        <div>
            <div>
                <h1>Tecnologias</h1>
                <BsPlusSquare size={28}/>
                <Link className="button__link" to="user/create">Deixar techList</Link>
            </div>
            <ul>
                
            </ul>
        </div>
    ) 
}