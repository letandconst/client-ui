import LandingPage from "./layout/LandingPage";
import "antd/dist/antd.min.css";
import "./styles/antd-custom.scss";
import "./styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
