import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from '../pages/Home';
import Missoes from '../pages/Missoes';
import Erro from '../pages/Erro';
import Planetas from "../pages/Planetas";
import Noticias from "../pages/Noticias"
import Login from "../pages/Login";
import Artigos from "../pages/Artigos";

import Header from '../components/Header';
import Footer from '../components/Footer';

import Private from "./Private";

import { ThemeHeaderContext } from '../contexts/themeHeader';
import { useContext } from "react";
 

const VerificaRota = ({ children }) => {
    const localizacao = useLocation();
    
    return children(localizacao);
};

function RoutesApp() {
    const { toggleIsHome } = useContext(ThemeHeaderContext);

    return (
        
            <VerificaRota>
               
                {localizacao => (
                    <>
                        {localizacao.pathname !== '/login' && localizacao.pathname !== '/erro' ?<Header /> : null}
                        {localizacao.pathname === '/' ? toggleIsHome(true) : toggleIsHome(false)}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/missões" element={<Private><Missoes /></Private>} />
                            <Route path="/planetas" element={<Private><Planetas /></Private>} />
                            <Route path="/noticias" element={<Noticias />} />
                            <Route path="*" element={<Erro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/artigos" element={<Private><Artigos /></Private>}></Route>
                        </Routes>
                        {localizacao.pathname !== '/login' && <Footer />}
                    </>
                )}
            </VerificaRota>

    );
}

export default RoutesApp;