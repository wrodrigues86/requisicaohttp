import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Listafilmes() {
    const [filmes, setFilmes] = useState([]);
    const { paginacorrente } = useParams();
    const [ vpaginacorrente, setPaginacorrente ] = useState();
    const [pagina, Setpagina] = useState(1);
    const [paginaAtual, SetpaginaAtual] = useState(1);
    const [totalPaginas, SettotalPaginas] = useState(0);
    const urlImagem = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        const buscaFilmes = () => {

            setPaginacorrente((paginacorrente === undefined) ? 1 : paginacorrente );

            const url = `https://api.themoviedb.org/3/movie/popular?api_key=21f8e8c7baf332a6575e4abd09257720&page=${paginacorrente}&language=pt-BR`;
            fetch(url).then(response => response.json()).then((data) => {
                let retorno = data;
                let results = data.results;
                console.log(results);
                console.log(retorno);
                SettotalPaginas(retorno.total_pages);
                setFilmes(results);
            })
                .catch((error) => {
                    console.log(error);
                });
        };

        buscaFilmes();
    }, [pagina, vpaginacorrente, paginacorrente ]);


    const proximapaginas = () => {
        if (paginaAtual !== totalPaginas) {
            let pacorrente = parseInt(vpaginacorrente) + 1;
            Setpagina(pacorrente);
            SetpaginaAtual(pacorrente);
            document.location.href = pacorrente;
        }
    };

    const paginaanteior = () => {
        if (paginaAtual !== 1) {
            let pacorrente = parseInt(vpaginacorrente) - 1;
            Setpagina(pacorrente);
            SetpaginaAtual(pacorrente);
            document.location.href = pacorrente;
        }
    };

    return (
        <div>
            <div className="flex-container">
                {
                    filmes.map(item => {
                        return (
                            <div onClick={() => { document.location.href = `/detalhe/${vpaginacorrente}/${item.id}`; }} className="filme" key={item.id}>
                                <img className="poster" width="150px" src={urlImagem + item.poster_path} title={item.title} alt={item.title} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <button onClick={paginaanteior} >Voltar</button>
                <button onClick={proximapaginas}>Próximo</button>
                &nbsp; &nbsp;
                {vpaginacorrente} / {totalPaginas}
            </div>
        </div>
    );
};