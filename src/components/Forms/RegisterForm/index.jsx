import { useForm } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema.js";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services";
import { useState } from "react";
import {
  MdSettingsInputSvideo,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [course__module, setCourse__module] = useState("Primeiro");

  const navigate = useNavigate();

  const userRegister = async (payload) => {
    try {
      setLoading(true);
      await api.post("/users", payload);
      navigate("/");
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.log(error);
      if (error.response?.data === "Email already exists") {
        alert("Usuário já cadastrado!");
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
      <div>
        <img src="../../../src/assets/Logo.png" alt="" />
        <Link className="button__secondary" to="/">
          Voltar
        </Link>
      </div>
      <h1 className="">Crie sua conta</h1>
      <p>Rápido e grátis, vamos nessa</p>
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        placeholder="Digite aqui seu nome"
        type="text"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label="Email"
        placeholder="Digite aqui seu email"
        type="text"
        error={errors.email}
        {...register("email")}
      />
      
      <Input
        label="Senha"
        placeholder="Digite aqui sua senha"
        type={isHidden ? "password" : "text"}
        error={errors.password}
        {...register("password")}
      />
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <MdVisibilityOff size={30} /> : <MdVisibility size={30} />}
      </button>

      <Input
        label="Confirmar senha"
        placeholder="Digite novamente sua senha"
        type="password"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />

      <Input
        label="Bio"
        placeholder="Fale sobre você"
        type="text"
        error={errors.name}
        {...register("bio")}
      />

      <Input
        label="Contato"
        placeholder="Opção de Contato"
        type="text"
        error={errors.name}
        {...register("contact")}
      />

      <label className="" htmlFor="">Selecionar Módulo</label>
      <select className="select" onChange={(e) => setCourse__module(e.target.value)}>
        <option value="Primeiro">Primeiro Módulo (Introdução ao Frontend)</option>
        <option value="Segundo">Segundo Módulo (Frontend Avançado)</option>
        <option value="Terceiro">Terceiro Módulo (Introdução ao Backend)</option>
        <option value="Quarto">Quarto Módulo (Backend Avançado)</option>
      </select>
      <input type="hidden" {...register("course__module")} />

      <div>
        <button
          className="button__primary"
          type="submit"
          disabled={!isValid || !isDirty}
        >
          Cadastrar
        </button>
      </div>
    </form>
    </>
  );
};