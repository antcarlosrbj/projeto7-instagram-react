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
                        <div class="paper-plane">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="compass">
                            <ion-icon name="compass-outline"></ion-icon>
                        </div>
                        <div class="heart">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="person">
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
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