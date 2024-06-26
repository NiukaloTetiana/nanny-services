import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

import App from "./components/App";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer
      theme="light"
      style={{ zIndex: 99999 }}
      autoClose={2000}
      transition={Slide}
    />
  </BrowserRouter>
);
