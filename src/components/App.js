import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import logo from '../images/logo-adalab.png';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateProject from "./Main/CreateProject";
import Landing from "./Main/Landing";

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/create" element={<CreateProject />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer logo={logo}></Footer>
    </>
  );
}

export default App;
