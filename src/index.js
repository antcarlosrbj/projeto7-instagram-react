import ReactDOM from 'react-dom';
import Topo from "./Topo";
import Conteudo from "./Conteudo";
import BarraInferior from "./BarraInferior";

function App() {
    return (
        <div>
            <Topo />
            <Conteudo />
            <BarraInferior />
            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));