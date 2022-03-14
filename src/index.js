import ReactDOM from 'react-dom';
import Topo from "./Topo";
import Conteudo from "./Conteudo";
import BarraInferior from "./BarraInferior";

function App() {
    
    const stories = ["9gag", "meowed", "barked", "nathan", "wawa", "respondeai", "filomoderna", "memeriago"];
    const posts = [{perfil: "meowed", imagem: "gato-telefone"}, {perfil: "meowed", imagem: "gato-telefone"}, {perfil: "meowed", imagem: "gato-telefone"}];

    return (
        <div>
            <Topo />
            <Conteudo stories={stories} posts={posts}/>
            <BarraInferior />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));