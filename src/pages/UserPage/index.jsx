import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";

export default () => {
  const { user, userLogout } = useContext(UserContext);
  return (
    <>
      <header>
        <img src={Logo} alt="" />
        <Link className="link" to="/">
          <button className={`button__secondary ${style.exit__button}`} onClick={() => userLogout()}>Sair</button>
        </Link>
      </header>
      <nav className={style.userInfo__container} user={user}>
        <h2 className="title1">Olá, {user?.name}</h2>
        <p className="paragraph2">{user?.course_module}</p>
      </nav>
      <main className="">
        <div className={style.main__container}>
          <div>
            <TechList />
          </div>
        </div>
      </main>
    </>
  );
};