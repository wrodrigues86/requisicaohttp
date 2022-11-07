import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Filme() {

    const { filme, paginacorrente } = useParams();
    const [detlhe, setDetalhe] = useState([]);
    const urlImagem = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {

        const url = `https://api.themoviedb.org/3/movie/${filme}?api_key=21f8e8c7baf332a6575e4abd09257720&language=pt-BR`
        fetch(url).then(response => response.json()).then((data) => {
            let retorno = data;
            setDetalhe(retorno);

            let bgImege = urlImagem + retorno.backdrop_path;
            document.querySelector(".detalhe").style.backgroundImage = "url(" + bgImege + ")";
        })
            .catch((error) => {
                console.log(error);
            });



    }, [filme, paginacorrente, urlImagem]);

    return (
        <div className="detalhe">
            <div className="poster_detalhe">
                <img width="200px" src={urlImagem + detlhe.poster_path} title={detlhe.title} alt={detlhe.title} />
            </div>
            <div className="descricao_detalhe">
                <div className="btn_voltar">
                    <button onClick={() => { document.location.href = `/${paginacorrente}`; }}>voltar</button>
                </div>
                <h1>{detlhe.title}</h1>
                <p>
                    {detlhe.overview}
                </p>
            </div>
        </div>
    );
};