export default function Topo() {
    return (
        <div>
            <div class="topo">
                <div class="topo-centro">
                    <div class="logos">
                        <div class="logo">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                        <div class="barra-vertical"></div>
                        <div class="instagram">
                            <img src="img/logo.png" />
                        </div>
                    </div>
                    <div class="pesquisa">
                        <p>Pesquisa</p>
                    </div>
                    <div class="opcoes">
                        <Opcoes nomeIcone="paper-plane" />
                        <Opcoes nomeIcone="compass" />
                        <Opcoes nomeIcone="heart" />
                        <Opcoes nomeIcone="person" />
                    </div>
                </div>
            </div>
            <div class="topo-mobile">
                <div class="mobile-logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class="mobile-instagram">
                    <img src="img/logo.png" />
                </div>
                <div class="mobile-paperplan">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}

function Opcoes(props) {
    return (
        <div class={props.nomeIcone}>
            <ion-icon name={props.nomeIcone + "-outline"}></ion-icon>
        </div>
    )
}