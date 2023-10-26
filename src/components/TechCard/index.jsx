import { MdOutlineModeEditOutline, MdVisibility } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const TechCard = ({user}) => {
    return(
        <li>
            <div>
                <h2>{user.techs.length > 0 ? user.techs[0].title : "Sem tecnologias"}</h2>
            </div>
            <div>
                <div>
                    <span>{user.techs.length > 0 ? user.techs[0].status : "Sem status"}</span>
                </div>
                <div>
                    <button title="Editar" aria-label="edit">
                        <MdOutlineModeEditOutline size={28} />
                    </button>
                    <button title="Deletar" aria-label="delet">
                        <RiDeleteBin6Line size={28} />
                    </button>
                    {/* <Link to="" title="Visualizar" aria-label="view">
                        <MdVisibility />
                    </Link> */}
                </div>
            </div>
        </li>
    )
}