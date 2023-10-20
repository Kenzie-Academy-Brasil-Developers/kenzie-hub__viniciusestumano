import { Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage, UserPage } from "../pages";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<UserPage />} />
    </Routes>
  );
};