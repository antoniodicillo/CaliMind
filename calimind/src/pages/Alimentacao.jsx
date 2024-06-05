import '../Css/alimentacao.css'

const Alimentacao = ()=>{
    return(
        <main>
            <section className="alimentacao-section-1">
              <div className="alimentacao-section-1-text">
                  <h1>Dicas De Alimentação</h1>
              </div>

              <div className="alimentacao-section-1-inform">
                  <img className="alimentacao-img-grande" src="../public/Img layout left.svg" alt=""/>
                  <div className="alimentacao-section-1-organizar">
                      <div className="alimentacao-section-1-organizar-atributo">
                          <img src="../public/tick-circle-white.svg" alt="certo"/>
                          <p>Variedade e Equilíbrio</p>
                      </div>
                      <div className="alimentacao-section-1-organizar-atributo">
                          <img src="../public/tick-circle-white.svg" alt="certo"/>
                          <p>Controle das Porções</p>
                      </div>
                      <div className="alimentacao-section-1-organizar-atributo">
                          <img src="../public/tick-circle-white.svg" alt="certo"/>
                          <p>Hidratação Adequada</p>
                      </div>
                      <div className="alimentacao-section-1-organizar-atributo">
                          <img src="../public/tick-circle-white.svg" alt="certo"/>
                          <p>Planejamento e Preparação</p>
                      </div>

                      <button className="alimentacao-button-white">Começe</button>
                  </div>
              </div>
          </section>

          <section className="alimentacao-section-2">
              <div className="alimentacao-section-2-organizar">
                  <div className="alimentacao-section-2-text">
                      <h1>Uso de <span>AI</span>
                          <br/>
                          Para ajudar na <span>Alimentação</span>
                      </h1>
                      <p>A <span>CaliMind</span> oferece um AI para pronto atendimento em alguma duvida sobre alimentação..
                          <br/><br/><br/>
                          Também nos podemos te oferecer fazer dar dicas sobre alimentação atualizadas constatemente</p>
                  </div>

                  <div className="alimentacao-section-2-card">
                      <div className="alimentacao-borda-2-pequena"></div>
                      <div className="alimentacao-section-2-card-text">
                          <h3>Veja ultimas noticias..</h3>
                          <h3><a href="#">saiba mais</a></h3>
                      </div>
                  </div>
              </div>
          </section>
        </main>
    )
}

export default Alimentacao