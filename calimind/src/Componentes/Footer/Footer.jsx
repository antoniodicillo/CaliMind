function Footer() {
    return (
      <footer>
      <div className="footer-div-perguntas">
            <div className="footer-alilhar-colum">
                <h1>Tem Alguma Pergunta?</h1>
                <p>Escreva sua preocupação para nós e nosso especialista entrará em contato com você.</p>
            </div>

            <button className="button-white">Entre Em Contato</button>
        </div>

        <div className="footer-div">
            <div className="footer-alilhar-colum">
                <img src="../public/Logo 2.svg" alt="logo"/>
                <p>blablabla</p>
            </div>

            <div className="footer-div-contatos">
                <div className="footer-alilhar-colum">
                    <h2>Links</h2>
                    <a href="#">Home</a>
                    <a href="/Sobre">Sobre Nos</a>
                    <a href="/Alimentacao">Alimentação</a>
                    <a href="/Login">Login</a>
                    <a href="/SingIn">Sing In</a>
                </div>

                <div className="footer-alilhar-colum">
                    <h2>Entre Em Contato</h2>
                    <div className="footer-icones">
                        <a href=""><img src="../public/redesSociais/instagram.svg" alt="instagram"/></a>
                        <a href=""><img src="../public/redesSociais/github.svg" alt="github"/></a>
                        <a href=""><img src="../public/redesSociais/whatsapp.svg" alt="whatsapp"/></a>
                        <a href=""><img src="../public/redesSociais/linkedin.svg" alt="linkedin"/></a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;