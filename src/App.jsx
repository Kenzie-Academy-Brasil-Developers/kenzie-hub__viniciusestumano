import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";

function App() {

  return (
    <>
    <Routes />
    <ToastContainer position="top-right" autoClose={2 * 1000} theme="dark" />
    </>
  )
}

export default App
