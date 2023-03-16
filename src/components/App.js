import "../styles/App.scss";


import {Routes, Route} from "react-router-dom";
import logo from '../images/logo-adalab.png';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateProject from "./Main/CreateProject";
import Landing from "./Main/Landing";
// import cover2 from '../images/cover_2.jpeg';

function App() {

  

  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="/create" element={<CreateProject/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
      <Footer logo={logo}></Footer>
    </div>
  );
}

export default App;
