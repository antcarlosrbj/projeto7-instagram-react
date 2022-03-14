export default function BarraInferior() {
    return (
        <div class="barra-inferior">
            <Opcoes nomeIcone="home" />
            <Opcoes nomeIcone="search" />
            <Opcoes nomeIcone="add-circle" />
            <Opcoes nomeIcone="heart" />
            <Opcoes nomeIcone="person" />
        </div>
    );
}

function Opcoes(props) {
    return (
        <div class={"barra-inferior-" + props.nomeIcone}>
            <ion-icon name={props.nomeIcone + "-outline"}></ion-icon>
        </div>
    )
}