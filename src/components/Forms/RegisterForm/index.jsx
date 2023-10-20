import Logo from "../../../assets/Logo.png";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import style from "./index.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { UserContext } from "../../../providers/UserContext";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm ({
    resolver: zodResolver(registerFormSchema),
  });

  const [isHidden, setIsHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const [course_module, setCourse__module] = useState("Primeiro Módulo (Introdução ao Frontend)");

  const { userRegister } = useContext(UserContext);

  const submit = (payload) => {
    const userDataIdRandom = {...payload, id: crypto.randomUUID()}
    userRegister(userDataIdRandom, setLoading);

  };

  return (
    <>
    <div className={style.registerContainer}>
      <div className={style.header__container}>
        <img src={Logo} alt="" />
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
            {...register("name")}
            error={errors.name}
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
            {isHidden ? <MdVisibilityOff size={28} /> : <MdVisibility size={28} />}
          </button>

          <span  className="headline">Confirmar senha</span>
          <Input
            // label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            type={isHidden ? "password" : "text"}
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

          <label className="headline">Selecionar Módulo</label>
          <select className="select" onChange={(e) => setCourse__module(e.target.value)} 
            {...register("course_module")}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo (Introdução ao Frontend)</option>
            <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo (Frontend Avançado)</option>
            <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo (Introdução ao Backend)</option>
            <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo (Backend Avançado)</option>         
          </select>
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