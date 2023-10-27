import { MdClose } from "react-icons/md"
import { EditTechForm } from "../Forms/EditTechForm"

export const EditTechModal = ({setVisible}) => {
    return (
        <main>
            <div>
                <h2>Tecnologia Detalhes</h2>
                <MdClose onClick={() => setVisible(false)} />
            </div>
            <EditTechForm />
        </main>
    )
}