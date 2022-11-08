import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Listafilmes() {
    const [ filmes, setFilmes] = useState([]);
    const { paginacorrente } = useParams();
    const [ vpaginacorrente, setPaginacorrente] = useState();
    const [ totalPaginas, SettotalPaginas] = useState(0);
    const urlImagem = "https://image.tmdb.org/t/p/w500";

    const [preview, setPreview] = useState(0);
    const [next, setNext] = useState(0);

    useEffect(() => {
        const buscaFilmes = () => {

            let prev = parseInt(vpaginacorrente);

            setNext(prev + 1);
            setPreview((prev - 1) === 0 ? 1 : (prev - 1));

            setPaginacorrente((paginacorrente === undefined) ? 1 : paginacorrente);

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
    }, [vpaginacorrente, paginacorrente, preview, next]);


    return (
        <div>
            <div className="flex-container">
                {
                    filmes.map(item => {
                        return (
                            <div className="filme" key={item.id}>
                                <Link to={`/detalhe/${vpaginacorrente}/${item.id}`}>
                                    <img className="poster" width="150px" src={urlImagem + item.poster_path} title={item.title} alt={item.title} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <Link className="menu_navegacao" to={`/${preview}`}>voltar</Link>
                <Link className="menu_navegacao" to={`/${next}`}>próximo</Link>
                &nbsp; &nbsp;
                {vpaginacorrente} / {totalPaginas}
            </div>
        </div>
    );
};