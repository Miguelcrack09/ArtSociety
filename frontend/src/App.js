import React from "react";
import NavBarHome from "./components/NavBarHome";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./screens/Home";
import HomeUsers from "./screens/HomeUsers";
import Login from "./screens/Login";
import Obra from "./screens/Obra";
import Users from "./screens/Users";
import NotFound from "./screens/NotFound";

function App() {
    return (
        <BrowserRouter>
            <NavBarHome/>
            <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/homeUsers" element={<HomeUsers/>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/obra" element={<Obra/>}/>
              <Route path="/users" element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;