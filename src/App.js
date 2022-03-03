
import ReactDom from "react-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import "./App.css";



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}/>   
        <Route path="cv" element={<Cv />}/>        
        <Route path="about" element={<About />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="*" element={<NoPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}


