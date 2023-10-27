import { MdOutlineModeEditOutline, MdVisibility } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import { EditTechModal } from "../EditTechModal";

export const TechCard = ({techs}) => {
    const { user } = useContext(UserContext);
    const [isVisible, setVisible] = useState(false);
    const { deleteTech, setEditTech, selectEditTech, editTech } = useContext(TechContext);
    // console.log(techs, user.id);

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
                <button onClick={() => setVisible(true)} title="Editar" aria-label="edit">
                        <MdOutlineModeEditOutline onClick={() => setEditTech(techs)} size={20} color="white" />
                    </button>
                    {editTech && isVisible? <EditTechModal setVisible={setVisible} />: null}
                    <button onClick={() => deleteTech(techs.id)} title="Deletar" aria-label="delet">
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