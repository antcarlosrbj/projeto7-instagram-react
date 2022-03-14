export default function Conteudo(props) {


    const { seuPerfil, stories, posts, sugestoes } = props;


    return (
        <div class="conteudo">
            <div class="stories-posts">
                <div class="stories">
                    {stories.map(storie => <Storie perfil={storie} />)}
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                <div class="posts">
                    {posts.map(post => <Post perfil={post.perfil} imagem={post.imagem} />)}
                </div>
            </div>
            <div class="sidebar">
                <div class="seu-perfil">
                    <div class="seu-icon">
                        <img src={seuPerfil.imagem} />
                    </div>
                    <div class="seu-nome">
                        <strong>{seuPerfil.perfil}</strong>
                        <p>{seuPerfil.nome}</p>
                    </div>
                </div>
                <div class="sugestoes-para-voce">
                    <div class="texto-sugestoes">
                        <p>Sugestões para você</p>
                    </div>
                    <div class="ver-tudo">
                        <p>Ver tudo</p>
                    </div>
                </div>
                {sugestoes.map(sugestao => <Sugestao perfil={sugestao.perfil} imagem={sugestao.imagem} mensagem={sugestao.mensagem} />)}
                <div class="links-sidebar">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma</p>
                </div>
                <div class="direitos">
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div>
        </div>
    );
}

function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img class="fundo" src="img/stories_background.jpg" />
                <img class="perfil" src={"img/" + props.perfil + ".png"} />
            </div>
            <p>{props.perfil}</p>
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <div class="post-topo">
                <div class="icon">
                    <img src={"img/" + props.perfil + ".png"} />
                </div>
                <div class="post-perfil">{props.perfil}</div>
                <div class="mais">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <img src={"img/" + props.imagem + ".png"} />
            <div class="post-base">
                <div class="post-opcoes">
                    <Icone nomeClasse="curtir" icone="heart" />
                    <Icone nomeClasse="comentar" icone="chatbubble" />
                    <Icone nomeClasse="compartilhar" icone="paper-plane" />
                    <div class="opcoes-espaco"></div>
                    <Icone nomeClasse="salvar" icone="bookmark" />
                </div>
                <div class="post-iteracoes">
                    <div class="iteracoes-icon">
                        <img src={"img/" + props.perfil + ".png"} />
                    </div>
                    <div class="iteracoes-perfil">
                        <p>Curtido por <strong> respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestoes">
            <div class="sugestoes-icon">
                <img src={props.imagem} />
            </div>
            <div class="sugestoes-perfil">
                <strong>{props.perfil}</strong>
                <p>{props.mensagem}</p>
            </div>
            <div class="seguir">
                <strong>Seguir</strong>
            </div>
        </div>
    )
}

function Icone(props) {
    return (
        <div class={props.nomeClasse}>
            <ion-icon name={props.icone + "-outline"}></ion-icon>
        </div>
    )
}