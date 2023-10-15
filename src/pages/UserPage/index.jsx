import { DefaultTemplate } from "../../components";

export default ({ user, userLogout }) => {
  return (
    <DefaultTemplate user={user} userLogout={userLogout}>
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