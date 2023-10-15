import { LoginForm } from "../../components";

export default ({ setUser }) => {
  return (
    <main className="">
      <div className="">
        <div className="">
          <LoginForm setUser={setUser} />
        </div>
      </div>
    </main>
  );
};