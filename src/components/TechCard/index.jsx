import { MdOutlineModeEditOutline, MdVisibility, RiDeleteBin6Line } from "react-icons/md ri";
import { Link } from "react-router-dom";

export const TechCard = ({users}) => {
    return(
        <li>
            <div>
                <h2>{users.tech.title}</h2>
            </div>
            <div>
                <div>
                    <span>{users.tech.status}</span>
                </div>
                <div>
                    <button title="Editar" aria-label="edit">
                        <MdOutlineModeEditOutline size={28} />
                    </button>
                    <button title="Deletar" aria-label="delet">
                        <RiDeleteBin6Line size={28} />
                    </button>
                    <Link to="" title="Visualizar" aria-label="view">
                        <MdVisibility />
                    </Link>
                </div>
            </div>
        </li>
    )
}