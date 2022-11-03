import { useEffect, useState} from "react";

function App() {

  const [ filmes, setFilmes ] = useState([]); 
  const [ urlImagem, SeturlImagem ] = useState('https://image.tmdb.org/t/p/w500/'); 
  
  useEffect(()=>{

    // https://image.tmdb.org/t/p/w500/ + imagem
    // dominio + w500 = largura + imagem

    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=21f8e8c7baf332a6575e4abd09257720&page=1&language=pt-BR";

    fetch(url).then(response => response.json()).then((data)=>{
      let retorno = data;
      let results = data.results;
      console.log(results);
      setFilmes(results);
    })
    .catch((error)=>{
      console.log(error);
    });
      
  },[]);

  return (
    <div>
      {
          filmes.map(item => {
            return (
              <div key={item.id}>
                <div>{item.title}</div>
                <div><img width="200px" src={urlImagem + item.poster_path}  alt={item.title} /></div>
                <div>Popularidade: {item.popularity}</div><br/>
                <div>Descrição:{item.overview}</div>
              </div>
            )
          })
      }
    </div>
  );
}

export default App;
