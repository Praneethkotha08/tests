import './App.css';
// import F1 from "./components/F1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home, About} from "./components/F2";
import Nav from "./components/nav"
import Contact from './components/contact';
function App() {
  return (
   <div>
    {/* < F1/> */}
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </HashRouter>
   </div>
  );
}

export default App;
