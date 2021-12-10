import React from "react";
import NavBarHome from "./components/NavBarHome";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Containerstyled } from "./css/Styledcomp";


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
import ConfObra from "./screens/ConfObra";
import Scomp from "./screens/Scomp";
import { FooterS, Policy } from "./css/Styledcomp";

function App() {
    return (

        <BrowserRouter>
            <NavBarHome />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/homeUsers" element={<HomeUsers />} />
                <Route path="/obra" element={<Obra />} />
                <Route path="/users" element={<Users />} />
                <Route path="/searchgenero" element={<SearchGenero />} />
                <Route path="/ResultGenero" element={<SearchResults />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Update" element={<ResultUpdate />} />
                <Route path="/del" element={<ResultDelete />} />
                <Route path="/Add" element={<ConfObra />} />
                <Route path="/sc" element={<Scomp />} />
            </Routes>
            <FooterS>
                <Policy>
                    <p>
                        ©2021 ArtSociety, Inc. All rights reserved.
                    </p>
                </Policy>
            </FooterS>
        </BrowserRouter>
    );
}

export default App;