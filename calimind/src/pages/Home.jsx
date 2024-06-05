import '../Css/home.css'

function Home() {
  return (
    <main>
      <section className="home-section-1">
            <div className="home-section-1-img">
                <div className="home-caixa-blue-transparente">
                    <div className="home-borda">.</div>
                    <div className="home-section-1-div-texto">
                        <h1>Apenas com a sua camera, e sua força de vontade</h1>
                        <p>A hidratação que impulsiona sua determinação na calistenia</p>
                        <button className="button-white">Começe</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-section-2">
            <div className="home-section-2-text">
                <h1>Nós Oferecemos</h1>
                <p>
                    ChatGPT
                    A Calimind oferece um aplicativo inovador que utiliza Inteligência Artificial para orientar e treinar iniciantes em calistenia, fornecendo uma experiência personalizada e eficaz de fitness em casa</p>
            </div>

            <div className="home-section-2-organizar">
                <div className="home-caixa-white-transparente">
                    <div className="home-borda-2"></div>
                    <div className="home-section-1-div-texto">
                        <h1>Treinos Personalizados </h1>
                        <p>T.P. da CaliMind são planos de exercícios adaptativos, projetados para otimizar a prática de calistenia, proporcionando orientação individualizada</p>
                    </div>
                </div>

                <div className="home-caixa-white-transparente">
                    <div className="home-borda-2"></div>
                    <div className="home-section-1-div-texto">
                        <h1>+ de 30 Exercícios </h1>
                        <p>Com mais de 30 exercícios inicialmente disponíveis, o CaliMind utiliza IA para oferecer uma variedade de opções de treinamento em calistenia</p>
                    </div>
                </div>

                <div className="home-caixa-white-transparente">
                    <div className="home-borda-2"></div>
                    <div className="home-section-1-div-texto">
                        <h1>Uso De IA</h1>
                        <p>O Uso de IA da CaliMind é uma inovação que emprega IA para personalizar e aprimorar a experiência de treinamento em calistenia</p>
                    </div>
                </div>

                <div className="home-caixa-white-transparente">
                    <div className="home-borda-2"></div>
                    <div className="home-section-1-div-texto">
                        <h1>Custo Beneficio</h1>
                        <p>O CaliMind oferece um excelente custo-benefício ao combinar o poder da inteligência artificial com um vasto conjunto de recursos para treinamento em calistenia</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-section-3">
            <div className="home-section-3-text">
                <h1>Porque o cliente acredita em nos</h1>
                <p>Os clientes acreditam em nós porque somos dedicados a fornecer resultados tangíveis e experiências excepcionais. Nossa abordagem personalizada e compromisso com a excelência nos tornam confiáveis e respeitados em nosso setor</p>
            </div>

            <div className="home-section-3-inform">
                <img className="home-img-grande" src="../public/1-img-2.jpg"/>
                <div className="home-section-3-organizar">
                    <div className="home-section-3-organizar-atributo">
                        <img src="../public/tick-circle.svg" alt="certo"/>
                        <p>Exercicios seguros e praticos em qualquer ambiente</p>
                    </div>
                    <div className="home-section-3-organizar-atributo">
                        <img src="../public/tick-circle.svg" alt="certo"/>
                        <p>Um sistema inteligente para a sua alimentação</p>
                    </div>
                    <div className="home-section-3-organizar-atributo">
                        <img src="../public/tick-circle.svg" alt="certo"/>
                        <p>Nos temos os melhores estudos de calistenia</p>
                    </div>
                    <div className="home-section-3-organizar-atributo">
                        <img src="../public/tick-circle.svg" alt="certo"/>
                        <p>Acreditamos na sua saude e vontade de fazer exercicios</p>
                    </div>

                    <button className="button-blue">Começe</button>
                </div>
            </div>
        </section>

        <section className="home-section-4">
            <h1>Ultimas Novidades</h1>

            <div className="home-section-4-cards">
                <div className="home-section-4-card home-section-4-card-1">
                    <div className="home-borda-2-pequena"></div>
                    <div className="home-section-4-card-text">
                        <h3>Agulhas negras lança um artigo sobre calistenia</h3>
                        <p>A Agulhas Negras estudou sobre a calistenia e seus benefícios para o condicionamento físico e saúde.</p>
                        <h3><a href="#">saiba mais</a></h3>
                    </div>
                </div>

                <div className="home-section-4-card home-section-4-card-2">
                    <div className="home-borda-2-pequena"></div>
                    <div className="home-section-4-card-text">
                        <h3>Estrelas da Calistenia</h3>
                        <p> Atletas de calistenia ganham visibilidade, inspirando milhões com suas habilidades físicas.</p>
                        <h3><a href="#">saiba mais</a></h3>
                    </div>
                </div>

                <div className="home-section-4-card home-section-4-card-3">
                    <div className="home-borda-2-pequena"></div>
                    <div className="home-section-4-card-text">
                        <h3>Calistenia para Todas as Idades</h3>
                        <p>Estudos destacam os benefícios da calistenia para idosos, promovendo força, equilíbrio e mobilidade.</p>
                        <h3><a href="#">saiba mais</a></h3>
                    </div>
                </div>
            </div>

            <button className="button-white">Começe</button>
        </section>

        <section className="home-section-5">
            <div className="home-section-5-organizar">
                <div className="home-section-5-text">
                    <h1>Compare E <span>Prove</span></h1>
                    <p>Para ter todos os beneficios que a <span>CaliMind</span> oferece, você precisaria investir quase <span>R$1000</span> em uma academia!
                        <br/><br/><br/>
                    Nos podemos te oferecer um <span>corte consideravel de custos</span>. 
                        <br/>
                    Com praticidade de treinar em qualquer ambiente, além de ter um acompanhamento de uma IA em seus treinos.</p>
                </div>

                <img src="../public/Tabela.svg" alt="tabela"/>
            </div>
        </section>

        <section className="home-section-6">
            <div className="home-section-6-img"></div>

            <div className="home-section-6-perguntas">
                <h1>Perguntas Frequentes</h1>

                <div className="home-section-6-pergunta">
                    <div className="home-section-6-pergunta-titulo">
                        <h3>O que é calistenia?</h3>
                        <button className="button">+</button>
                    </div>
                    <p>A calistenia é um método de treinamento físico que utiliza o peso corporal como resistência, visando o desenvolvimento da força, flexibilidade e controle corporal. </p>
                </div>

                <div className="home-section-6-pergunta">
                    <div className="home-section-6-pergunta-titulo">
                        <h3>Quais são os benefícios da calistenia?</h3>
                        <button className="button">+</button>
                    </div>
                    <p>A prática regular de calistenia pode resultar em aumento da força muscular, melhoria da flexibilidade, aumento da resistência cardiovascular, melhor postura e coordenação motora.</p>
                </div>

                <div className="home-section-6-pergunta">
                    <div className="home-section-6-pergunta-titulo">
                        <h3>Como posso começar a praticar calistenia?</h3>
                        <button className="button">+</button>
                    </div>
                    <p>Não necessariamente. A calistenia é acessível para iniciantes, intermediários e avançados. Nossos programas podem ser adaptados para todos os níveis de condicionamento físico.</p>
                </div>
                </div>
            
        </section>
    </main>
  );
}

export default Home;