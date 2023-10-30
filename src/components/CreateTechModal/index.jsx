import { MdClose } from "react-icons/md"
import { CreateTechForm } from "../Forms/CreateTechForm";
import style from "./index.module.scss";


export const CreateTechModal = ({setVisible}) => {

    return (
        <main className={style.main__container}>
            <div className={style.title__container}>
                <h2>Cadastrar tecnologia</h2>
                <MdClose onClick={() => setVisible(false)} />
            </div>
            <CreateTechForm />
        </main>
    )
}