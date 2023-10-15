import RegisterForm from "../Forms/RegisterForm";

export default ({ user, userLogout }) => {
    return (
      <header>
        <div className="">
          <div>
            <img src="../../assets/Logo.svg" alt="" />
            {/* <div>
              <p className="">{user?.name}</p>
              <p className="">{user?.email}</p>
            </div> */}
            <div>
              <h2>Olá, {user.name}</h2>
              <p>modulo do usuário</p>
            </div>
            <button className="" onClick={() => userLogout()}>
              Sair
            </button>
          </div>
        </div>
      </header>
    );
  };