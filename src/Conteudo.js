import styles from "./conteudo.css"

function Conteudo() {
    return (
           <div className="conteudo">
  
      
      <div className="manga"> 
      <h3> O que é Mangá</h3>
      <p>Mangá é o nome dado para as histórias em quadrinhos japonesas. A sua leitura, que se tornou a sua marca característica é feita da direita para a esquerda. Os mais famosos tem seus capítulos liberados semanalmente ou mensalmente em revistas como a Weekly Shonen Jump, responsável por diversos títulos famosos do gênero Shounen.</p>
      <div  className="imagem1"></div>
  
       </div>
  
      <div className="manhwa"> 
      <h3> O que é Manhwa</h3>
      <p>Tendo origem Coreana, é usualmente postado na internet, diferenciando dos mangás que ainda são lançados em revistas de maneira física, adotando a leitura da esquerda para a direita. Os manhwa costumam muita diversidade de gêneros e variados temas. A maioria dos títulos são escritos em aplicativos como WeebToon e Tapas</p>
      <div className="imagem2"></div>
  
        </div>
      <div className="manhua"> 
      <h3> O que é Manhua</h3>
      <p>O manhua apresenta traços menos exagerados e caricatos. Tanto quanto a maneira que é se falado na China, a maneira como se lê também varia de local para local. Por Exemplo, se você a obra tiver sido feita em Taiwan ou Hong Kong, sera lido como mangas; entretanto na China Continental, tera a leitura como os manhwas.</p>
      <div  className="imagem3"></div>
        </div>
      </div>
    )
}
export default Conteudo