import { Link } from "react-router-dom"
import { BsPlusSquare } from "react-icons/bs";
import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "../TechCard";
import { UserContext } from "../../providers/UserContext";
import { CreateTechModal } from "../CreateTechModal";


export const TechList = () => {
    const { techList } = useContext(TechContext);
    const { user } = useContext(UserContext);
    const [isVisible, setVisible] = useState(false);
    console.log(user);
    return(
        <div>
            <div>
                <h1>Tecnologias</h1>
                <BsPlusSquare  onClick={() => setVisible(true)} size={28}></BsPlusSquare>
                <Link className="button__link" to="user/create">Deixar techList</Link>
            </div>

            {isVisible? <CreateTechModal setVisible={setVisible}/>: null}

            <ul>
                {
                    techList.map((user) => (
                        <TechCard key={user.id} user={user} />
                    ))
                }
            </ul>
        </div>
    ) 
}