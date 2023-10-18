import { DefaultTemplate } from "../../components";
import Logo from "../../assets/Logo.png";

export default ({ user, userLogout }) => {
  return (
    <DefaultTemplate img={Logo} user={user} userLogout={userLogout}>
      <div>
        img={Logo}
        <nav>{user} {userLogout}</nav>
      </div>
      <main className="">
        <div className="">
          <div>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};