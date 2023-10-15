import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage, RegisterPage, UserPage } from "../pages";
import { useState } from "react";

export default () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user" element={<UserPage user={user} userLogout={userLogout} />} />
    </Routes>
  );
};