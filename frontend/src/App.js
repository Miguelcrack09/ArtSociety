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
import Register from "./screens/Register";
import ResultUpdate from "./screens/ResultUpdate";
import ResultDelete from "./screens/ResultDelete";
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
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Update" element={<ResultUpdate/>}/>
              <Route path="/del" element={<ResultDelete/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;