import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import About from "./pages/About";
import Cats from "./pages/Cats";
import Error from "./pages/Error";
import FooTer from "./components/FooTer";
import FormPage from "./pages/Formpage";

import { UserInfo } from "./UserInfo";
function App() {
  return (
    <div className="App">
      <NavBars>
        <nav>
          <ul>
            <li className="navli">
              <Link to={"/"}>Hem</Link>
            </li>
            <li className="navli">
              <Link to={"/about"}>Om</Link>
            </li>
            <li className="navli">
              <Link to={"/cats"}>Katter</Link>
            </li>
          </ul>
        </nav>
      </NavBars>

      <UserInfo.Provider value={"Vilka är vi?"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/cats/:name" element={<FormPage />} />
        </Routes>
      </UserInfo.Provider>
      <FooTer />
    </div>
  );
}
const NavBars = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default App;
