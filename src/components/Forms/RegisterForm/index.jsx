import { useForm } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema.js";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services";
import { useState } from "react";
import style from "./index.module.scss";
import {
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { toast } from "react-toastify";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [isHidden, setIsHidden] = useState(true);
  const [course__module, setCourse__module] = useState([]);

  const navigate = useNavigate();

  const userRegister = async (payload) => {
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
    } finally {
      setLoading(false);
    }
  };

  const submit = (payload) => {
    userRegister(payload);
  };

  return (
    <>
    <div className={style.registerContainer}>
      <div className={style.header__container}>
        <img src="../../../src/assets/Logo.png" alt="" />
        <Link className= {`button__secondary ${style.button__headerRegister}`} to="/">
          Voltar
        </Link>
      </div>
      <div className={style.formInfo__container}>
        <h2 className="">Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(submit)}>
          <div className={style.inputs__container}>
            <span className="headline">Nome</span>
          <Input
            // label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            error={errors.name}
            {...register("name")}
          />

          <span  className="headline">Email</span>
          <Input
            // label="Email"
            placeholder="Digite aqui seu email"
            type="text"
            error={errors.email}
            {...register("email")}
          />

          <span  className="headline">Senha</span>
          <Input
            // label="Senha"
            placeholder="Digite aqui sua senha"
            type={isHidden ? "password" : "text"}
            error={errors.password}
            {...register("password")}
          />
          <button className={style.button__icon} onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibilityOff size={30} /> : <MdVisibility size={30} />}
          </button>

          <span  className="headline">Confirmar senha</span>
          <Input
            // label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            type="password"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />

          <span className="headline">Bio</span>
          <Input
            // label="Bio"
            placeholder="Fale sobre você"
            type="text"
            error={errors.name}
            {...register("bio")}
          />

          <span className="headline">Contato</span>
          <Input
            // label="Contato"
            placeholder="Opção de Contato"
            type="text"
            error={errors.name}
            {...register("contact")}
          />

          <label className="headline" htmlFor="">Selecionar Módulo</label>
          <select className="select" onChange={(e) => setCourse__module(e.target.value)}>
            <option value="Primeiro">Primeiro Módulo (Introdução ao Frontend)</option>
            <option value="Segundo">Segundo Módulo (Frontend Avançado)</option>
            <option value="Terceiro">Terceiro Módulo (Introdução ao Backend)</option>
            <option value="Quarto">Quarto Módulo (Backend Avançado)</option>
          </select>
          <input type="hidden" {...register("course__module")} />
          </div>

          <div>
            <button
              className={`button__primary ${style.button__submit}`}
              type="submit"
              disabled={!isValid || !isDirty}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>  
    </>
  );
};