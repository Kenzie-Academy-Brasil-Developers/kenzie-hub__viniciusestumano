import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema.js";
import { useState } from "react";
import api from "../../../services";
import style from "./index.module.scss";
import { toast } from "react-toastify";
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
        toast.error("Credenciais inválidas");
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
      <div className={style.principal__container}>
        <div className={style.img__container}>
          <img src="../../../src/assets/Logo.png" alt="" />
        </div>
        <form className={style.form__container}
          onSubmit={handleSubmit(submit)}>
          <h3>Login</h3>
          <div className={style.inputForm__container}>
            <span>Email</span>
          <Input
            placeholder="Seu e-mail"
            type="email"
            id="email"
            error={errors.email}
            {...register("email")}
          />
          </div>
          <div className={style.inputForm__container}>
            <span>Senha</span>
          <Input
            placeholder="Sua senha"
            type="password"
            id="password"
            error={errors.password}
            {...register("password")}
          />
          </div>

          <div>
            <button className="button__primary" type="submit" disabled={loading}>
              Entrar
            </button>
            <p className={style.paragraph__form}>Ainda não possui uma conta?</p>
            <Link className="link" to="/register">
              <button className="button__secondary">Cadastrar-se</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};