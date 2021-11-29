import React from "react";
import NavBarHome from "./components/NavBarHome";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomeUsers from "./screens/HomeUsers";
import Login from "./screens/Login";
import Obra from "./screens/Obra";
import Users from "./screens/Users";
import NotFound from "./screens/NotFound";
import SearchGenero from "./screens/SearchGenero";
import SearchResults from "./screens/SearchResult";
function App() {
    return (
        <BrowserRouter>
            <NavBarHome/>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/homeUsers" element={<HomeUsers/>}/>
              <Route path="/obra" element={<Obra/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/searchgenero" element={<SearchGenero/>}/>
              <Route path="/ResultGenero" element={<SearchResults/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;