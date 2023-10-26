import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import api from "../services";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const { user } = useContext(UserContext);
    const [techList, setTechList] = useState([]); 
  
    useEffect(() => {
        const getTechs = async () => {
            try {
                const { data } = await api.get("/users")
                setTechList(data)
            } catch (error) {
                console.log(error);
            }
        }

        getTechs()

    }, [])


     const createTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const userID = localStorage.getItem("@USERID");
            // const { bio } = formData; 

            const newTech = {
                title: "React",
                status: "Iniciante"
            }
            const { data } = await api.post("/users/techs", newTech, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setTechList([...techList, data])
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <TechContext.Provider value={{techList , createTech}}>
            {children}
        </TechContext.Provider>
    )
}