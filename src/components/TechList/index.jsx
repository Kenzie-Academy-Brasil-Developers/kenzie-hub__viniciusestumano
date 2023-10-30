import { Link } from "react-router-dom"
import { BsPlusSquare } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "../TechCard";
import { UserContext } from "../../providers/UserContext";
import { CreateTechModal } from "../CreateTechModal";
import style from "./index.module.scss";


export const TechList = () => {
    const { techList  } = useContext(TechContext);
    const { user } = useContext(UserContext);
    const [isVisible, setVisible] = useState(false);
    const [userTechList, setUserTechList] = useState(user.techs || []);

    useEffect(() => { 
        setUserTechList([...techList])
    },[techList]);

    return(
        <div>
            <div className={style.titleAdd__container}>
                <h1>Tecnologias</h1>
                <BsPlusSquare  onClick={() => setVisible(true)} size={28}></BsPlusSquare>
                {/* <Link className="button__link" to="user/create">Deixar techList</Link> */}
            </div>

            {isVisible? <CreateTechModal setVisible={setVisible}/>: null}

            <ul className={style.techs__container}>
                {
                    userTechList.map((techs) => {
                        return (
                            <TechCard key={techs.id} techs={techs} setVisible={setVisible}/>
                        )
                    })
                }
            </ul>
        </div>
    ) 
}