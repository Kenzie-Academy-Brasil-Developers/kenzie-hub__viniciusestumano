import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema.js";
import { useState } from "react";
import api from "../../../services";
import style from "./index.module.scss";
export default ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (payload) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users", payload);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.accessToken);
      navigate("/user");
    } catch (error) {
      console.log(error);
      if (error.response?.data === "Incorrect password") {
        alert("Credenciais inválidas");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (payload) => {
    userLogin(payload);
  };

  return (
    <>
    <div className={style.container}>
      <img src="../../assets./logo.svg" alt="" />
    </div>
    <form onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
      <Input
        label="Email"
        placeholder="Seu e-mail"
        type="email"
        id="email"
        error={errors.email}
        {...register("email")}
      />

      <Input
        label="Senha"
        placeholder="Sua senha"
        type="password"
        id="password"
        error={errors.password}
        {...register("password")}
      />

      <div>
        <button className="button__primary" type="submit" disabled={loading}>
          Entrar
        </button>
        <p>Ainda não possue uma conta?</p>
        <Link className="link" to="/register">
          <button className="button__secondary">Cadastrar-se</button>          
        </Link>
      </div>
    </form>
    </>
  );
};