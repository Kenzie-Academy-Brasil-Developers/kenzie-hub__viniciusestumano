import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services";

const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const getUser = async () => {
            try {
                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setUser(data)
            }  catch (error) {
                console.log(error);
            }
        }

        getUser(); 
    }, [])

    const navigate = useNavigate();
  
    const userLogout = () => {
      setUser(null);
      navigate("/");
      localStorage.removeItem("@TOKEN");
    };

    const userLogin = async (payload, setLoading, reset) => {
        try {
          setLoading(true);
          const { data } = await api.post("/sessions", payload);
          setUser(data.user);
          localStorage.setItem("@TOKEN", data.accessToken);
          localStorage.setItem("@USERID", data.user.id);
          reset();
          navigate("/users");
    
        } catch (error) {
          console.log(error);
    
          if (error.response?.data === "Incorrect password") {
            toast.error("Credenciais inválidas");
    
          }
          if (error) {
            toast.error("Algo deu errado, usuário ou senha incorretos.")
          }
    
        } finally {
          setLoading(false);
    
        }
      };

      const userRegister = async (payload, setLoading) => {
        try {
          setLoading(true);
          await api.post("/users", payload);
          navigate("/");
          toast.success("Conta criada com sucesso!");
    
        } catch (error) {
          console.log(error);
          if (error.response?.data === "Email already exists") {
            toast.error("Usuário já cadastrado!");
    
          }
          if (error){
            toast.error("Algo deu errado, email ou usuário já cadastrado!")
          }
          
        } finally {
          setLoading(false);
    
        }
      };

    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, userRegister }}>
        {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };