import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import api from "../services";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const { user, getUser } = useContext(UserContext);
    const [techList, setTechList] = useState([]);
    
    const [editTech, setEditTech] = useState(null);
    
    const refreshTechs = async () => {
        setTechList(await user.techs);
        
    }

    useEffect(() => {
        refreshTechs();
      }, [user]);


     const createTech = async (formData) => {
        let allTechsList = [...user.techs];

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
            user.techs = [data, ...user.techs];
            setTechList([...user.techs]);
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
            user.techs = user.techs.filter(tech => tech.id !== removeID);
            console.log(user.techs);
   
            setTechList(user.techs);
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