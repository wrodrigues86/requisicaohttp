import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filmes from "./components/Listafilmes";
import Detalhefilme from "./components/Detalhefilme";
import Headers from "./components/Header";
import Notfound from "./components/Notfound";

export default function Rotas() {

    return (
        <BrowserRouter>
            <Headers />
            <Routes>
                <Route index element={<Filmes />} />
                <Route path="/" element={<Filmes />} />
                <Route path="/:paginacorrente" element={<Filmes />} />
                <Route path="/detalhe/:paginacorrente/:filme" element={<Detalhefilme />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
};