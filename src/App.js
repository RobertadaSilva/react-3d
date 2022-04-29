import './App.css';
import foto1 from "./img/3d.gif";
import foto2 from "./img/efecto.gif";
import foto3 from "./img/tumblr.gif";
import foto4 from "./img/tumblr2.gif";
import foto5 from "./img/tumblr3.gif";
import foto6 from "./img/foto.gif";
import foto7 from "./img/foto1.gif";




function App() {
  return (
    <div className="App">
     <div className="Cabecalho">
       <div className="Menu">
         <a href="#">Galeria</a>
         <a href="#">O que é</a>
         <a href="#">Contato</a>
       </div>
       
     </div>
     <div className="Conteudo">
         <p>O que significa 3D? <br></br>
          O espaço tridimensional é aquele que pode ser definido como tendo três dimensões, 
          sendo altura, profundidade e largura. O efeito da tridimensionalidade de imagens e objetos é dado j
          ustamente pela junção das três dimensões com luz e sombra, causando um relevo.
          Luz e sombra indicam diretamente ao olho humano se um objeto está próximo ou 
          distante de quem o observa. Sendo assim, ao ver uma imagem que possua essas informações, 
          o cérebro humano automaticamente a associa como algo tridimensional.</p>
        <img src={foto1} />
       </div>
       <div className="Galeria">
         <h1>Galeria</h1>
          <img src={foto2} />
          <img src={foto3} />
          <img src={foto4} />
          <img src={foto5} />
          <img src={foto6} />
          <img src={foto7} />
       </div>

      <div className="footer">
       
    
      <p>Author: Roberta da Silva</p>
      <p><a href="mailto:hege@example.com">robertadasilva0114.rds@gmail.com</a></p>
      </div>
    </div>
  );
}

export default App;
