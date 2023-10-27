import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import api from "../services";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const { user } = useContext(UserContext);
    const [techList, setTechList] = useState([]);
    
    const [editTech, setEditTech] = useState(null);
    
  
    // useEffect(() => {
    //     const getTechs = async () => {
    //         try {
    //             const { data } = await api.get("/users")
    //             setTechList(data)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     getTechs()

    // }, [])


     const createTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const userID = localStorage.getItem("@USERID");
            // const { bio } = formData; 

            const newTech = {
                title: "React",
                status: "Iniciante"
            }
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setTechList([data]);
            toast.success("Tecnologia adicionada.", {
                position: "top-right",
                autoClose: 2 * 1000
            });
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTech = async (removeID) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            await api.delete(`/users/techs/${removeID}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.filter(tech => tech.id !== removeID);

            setTechList(newTechList);
            toast.success("Exclusão de tecnologia efetuada.", {
                position: "top-right",
                autoClose: 2 * 1000
            });

        } catch (error) {
            console.log(error);
            
        }
    }

    const editTechnology = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            const { data } = await api.put(`/users/techs/${editTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });


            const newTechList = techList.map(tech => {
                if ( tech.id === editTech.id){
                    return data;
                } else {
                    return tech;
                }
            });
            setTechList(newTechList);
            toast.success("Tecnologia atualizada com sucesso.");
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const selectEditTech = (tech) => {
        setEditTech(tech);
    }


    return (
        <TechContext.Provider value={{techList , createTech, deleteTech, editTech ,setEditTech, selectEditTech, editTechnology}}>
            {children}
        </TechContext.Provider>
    )
}