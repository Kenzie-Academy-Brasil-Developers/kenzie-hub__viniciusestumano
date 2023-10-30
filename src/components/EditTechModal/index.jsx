import { MdClose } from "react-icons/md"
import { EditTechForm } from "../Forms/EditTechForm"
import style from "./index.module.scss";

export const EditTechModal = ({setVisible}) => {
    return (
        <main className={style.modal__container}>
            <div className={style.title__container}>
                <h2>Tecnologia Detalhes</h2>
                <MdClose onClick={() => setVisible(false)} />
            </div>
            <EditTechForm />
        </main>
    )
}