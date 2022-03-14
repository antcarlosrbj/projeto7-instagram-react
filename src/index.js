import ReactDOM from 'react-dom';
import Topo from "./Topo";
import Conteudo from "./Conteudo";
import BarraInferior from "./BarraInferior";

function App() {
    
    const seuPerfil = {nome: "Catana", perfil: "catanacomics", imagem: "img/catanacomics.png"}
    const stories = ["9gag", "meowed", "barked", "nathan", "wawa", "respondeai", "filomoderna", "memeriago"];
    const posts = [{perfil: "meowed", imagem: "gato-telefone"}, {perfil: "meowed", imagem: "gato-telefone"}, {perfil: "meowed", imagem: "gato-telefone"}];
    const sugestoes = [{perfil: "bad.vibes.memes", imagem: "img/bad.png", mensagem: "Segue você"}, {perfil: "chibirdart", imagem: "img/chibirdart.png", mensagem: "Segue você"}, {perfil: "razoesparaacreditar", imagem: "img/razoes.png", mensagem: "Novo no Instagram"}, {perfil: "adorable_animals", imagem: "img/adorable.png", mensagem: "Segue você"}, {perfil: "smallcutecats", imagem: "img/smallcutecats.png", mensagem: "Segue você"}]

    return (
        <div>
            <Topo />
            <Conteudo seuPerfil={seuPerfil} stories={stories} posts={posts} sugestoes={sugestoes} />
            <BarraInferior />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));