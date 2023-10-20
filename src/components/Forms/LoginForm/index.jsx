import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema.js";
import { useContext, useState } from "react";
import style from "./index.module.scss";
import { UserContext } from "../../../providers/UserContext";
export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin } = useContext(UserContext)

  const [loading, setLoading] = useState(false);


  const submit = (payload) => {
    userLogin(payload, setLoading, reset);

  };

  return (
    <>
      <div className={style.principal__container}>
        <div className={style.img__container}>
          <img src={Logo} alt="Logo KenzieHube" />
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