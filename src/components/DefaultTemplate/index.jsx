import Header from "../Header";

export default ({ children, user, userLogout }) => {
  return (
    <>
      <Header user={user} userLogout={userLogout} />
      {children}

    </>
  );
};