import { Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage, UserPage } from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/users" element={<UserPage />} />
      </Route>
    </Routes>
  );
};