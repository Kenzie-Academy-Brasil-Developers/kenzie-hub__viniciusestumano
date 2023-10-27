import { MdOutlineModeEditOutline, MdVisibility } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export const TechCard = ({techs}) => {
    return(
        <li className={style.techsCard__container}>
            <div>
                <h2>{techs.title}</h2>
            </div>
            <div className={style.statusTechs__container}>
                <div>
                    <span>{techs.status}</span>
                </div>
                <div className={style.buttons__container}>
                    <button title="Editar" aria-label="edit">
                        <MdOutlineModeEditOutline size={20} color="white" />
                    </button>
                    <button title="Deletar" aria-label="delet">
                        <RiDeleteBin6Line size={20} color="white"/>
                    </button>
                    {/* <Link to="" title="Visualizar" aria-label="view">
                        <MdVisibility />
                    </Link> */}
                </div>
            </div>
        </li>
    )
}