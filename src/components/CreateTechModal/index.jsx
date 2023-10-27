import { MdClose } from "react-icons/md"
import { CreateTechForm } from "../Forms/CreateTechForm";


export const CreateTechModal = ({setVisible}) => {

    return (
        <main>
            <div>
                <h2>Cadastrar tecnologia</h2>
                <MdClose onClick={() => setVisible(false)} />
            </div>
            <CreateTechForm />
        </main>
    )
}