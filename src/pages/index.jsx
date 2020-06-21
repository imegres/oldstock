import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import chain from '../static/svg/chain.svg';
import cloud from '../static/svg/cloud.svg';
import note from '../static/svg/note.svg';
import support from '../static/svg/support.svg';

export default class Index extends React.Component {
  render() {
    return (
      <Body>
        <Head>
          <title>Webstock | Gestão de pequenos negócios</title>
          <meta
            name="description"
            content="Webstock é um sistema para a gestão de pequenos negócios, aqui você controla suas vendas, estoque, produtos, fornecedores, pagamentos, clientes e muito mais!"
          />
          <meta name="keywords" content="controle, estoque, produtos, vendas, compras, clientes" />
          <meta name="author" content="José Augusto Megres de Oliveira" />
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Head>
        <Header />
        <div className="container">
          <div className="content">
            <section>
              <div>
                <h1>GERIR O PRÓPRIO NEGÓCIO PODE SER MUITO MAIS SIMPLES</h1>
                <p>
                  Aqui na webstock nós valorizamos a simplicidade do negócio, e buscamos sempre
                  tornar sua gestão mais ágil, simples e descomplicada.
                </p>
              </div>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_1KjmRZ.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </section>
          </div>
          <div className="content">
            <section>
              <h1>
                DISPONÍVEL QUANDO E ONDE VOCÊ PRECISAR <span>!</span>
              </h1>
              <div>
                <p>
                  Aqui na webstock nós valorizamos a simplicidade do negócio, e buscamos sempre
                  tornar sua gestão mais ágil, simples e descomplicada.
                </p>
              </div>
            </section>
          </div>

          <div className="content">
            <section>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_dcw1JY.json"
                background="transparent"
                speed="1"
                style={{ width: 500 }}
                loop
                autoplay
              ></lottie-player>
              <span>
                <h2>POR QUÊ DEVO ASSINAR A WEBSTOCK?</h2>

                <section>
                  <h3>1. Nunca perca seus prazos</h3>
                  <p>
                    Houve alguma vez que você se esqueceu de pagar algum fornecedor? Se sim eis aqui
                    o primeiro motivo, webstock te dá um relatório de todos seus pagamentos após o
                    cadastro, além disso avisamos com antecedência os prazos de seus pagamentos.
                  </p>
                </section>

                <section>
                  <h3>2. Controle tudo com precisão</h3>
                  <p>
                    Se um cliente te solicitasse um relatório de uma compra, com data, prazos e
                    valores, você teria tudo na mão? Temos todos os relatórios em nuvem, onde você
                    pode acessar até mesmo de seu dispositivo móvel.
                  </p>
                </section>
                <section>
                  <h3>3. Cresça</h3>
                  <p>
                    Aqui temos outro ponto, você consegue acompanhar se sua empresa está ou não
                    crescendo, webstock ajuda você a facilitar sua tomada de decisões.
                  </p>
                </section>

                <section>
                  <h3>4. Nada de papelzinho</h3>
                  <p>
                    Não é necessário ficar acumulando documento na “caixinha”, webstock oferece uma
                    solução em nuvem, para que você tenha facilidade no acesso de suas informações,
                    sem ter que ficar revirando papel.
                  </p>
                </section>
              </span>
            </section>
          </div>

          <div className="content">
            <section>
              <div className="line first"></div>
              <h2>TESTE GRATUITO</h2>
              <p>
                Temos confiança em nosso produto, por isso oferecemos teste gratuíto, sem cartão de
                crédito, é só se registrar e começar a testar!
              </p>
              <div className="line second"></div>
            </section>
          </div>

          <div className="content">
            <section>
              <h2>O QUE MAIS OFERECEMOS?</h2>

              <div className="card-container">
                <div className="card">
                  <img src={support} alt="support" />
                  <section>
                    <h3>SUPORTE ATIVO</h3>
                    <p>
                      Bateu aquela dúvida? É só contatar nosso suporte e estaremos sempre dispostos
                      a ajudar! ;)
                    </p>
                  </section>
                </div>

                <div className="card">
                  <img src={cloud} alt="cloud" />
                  <section>
                    <h3>ALTA DISPONIBILIDE</h3>
                    <p>
                      Nosso sistema está sempre disponível, tudo o que você precisa é de uma conexão
                      com a internet
                    </p>
                  </section>
                </div>
              </div>

              <div className="card-container">
                <div className="card">
                  <img src={chain} alt="chain" />
                  <section>
                    <h3>SEM COMPROMISSO</h3>
                    <p>
                      Precisa cancelar o plano? É fácil e simples, você não irá receber surpresas na
                      fatura do seu cartão
                    </p>
                  </section>
                </div>

                <div className="card">
                  <img src={note} alt="note" />
                  <section>
                    <h3>SEM DIFICULDADE</h3>
                    <p>
                      Apesar de ser uma ferramenta com múltiplas funcionalidades, não há dificuldade
                      em utilizar webstock, qualquer pessoa consegue com facilidade
                    </p>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </Body>
    );
  }
}

const Body = styled.div`
  margin: 70px 0 0 0;

  /* -------------------------------------------------------------------------- */
  /*                                   MOBILE                                   */
  /* -------------------------------------------------------------------------- */

  .content {
    font-size: 14pt;
    padding: 16px;
  }

  /* --------------------------- PRIMEIRO COMPONENTE -------------------------- */

  .content:nth-child(1) h1 {
    color: rgba(0, 0, 0, 0.8);
  }

  .content:nth-child(1) lottie-player {
    display: none;
  }

  .content:nth-child(1) p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 11pt;
    border-left: 3px solid #1428bf;
    padding-left: 8px;
  }

  /* --------------------------- SEGUNDO COMPONENTE --------------------------- */

  .content:nth-child(2) {
    padding: 20px;
    background: #1428bf;
    padding-bottom: 228px;
  }

  .content:nth-child(2) h1 {
    font-size: 24pt;
    color: rgba(255, 255, 255, 0.95);
  }

  .content:nth-child(2) h1 span {
    color: #ff5cf0;
  }

  .content:nth-child(2) div {
    color: rgba(255, 255, 255, 0.7);
    font-size: 11pt;
    border-left: 3px solid #ff5cf0;
    padding-left: 8px;
  }

  /* --------------------------- TERCEIRO COMPONENTE -------------------------- */

  .content:nth-child(3) {
    height: 380px;
  }

  .content:nth-child(3) lottie-player {
    display: none;
  }

  .content:nth-child(3) span {
    position: absolute;
    border-radius: 8px 0 0 8px;
    padding: 16px 24px;
    background: #5c22d8;
    margin-left: auto;
    right: 0;
    transform: translateY(-228px);
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.5);
    height: 520px;
    max-width: 400px;
  }

  .content:nth-child(3) p {
    color: #fff;
    opacity: 70%;
    font-size: 10pt;
    font-weight: bold;
  }
  .content:nth-child(3) h3 {
    color: #fff;
    font-size: 10pt;
    font-weight: bold;
  }

  .content:nth-child(3) h2 {
    color: #ff5cf0;
    font-size: 11pt;
    font-weight: bold;
  }

  /* ---------------------------- QUARTO COMPONENTE --------------------------- */

  .content:nth-child(4) .line.first {
    width: 50%;
    height: 3px;
    background: #ff5cf0;
  }

  .content:nth-child(4) .line.second {
    width: 50%;
    height: 3px;
    margin-left: auto;
    background: #5c22d8;
  }

  .content:nth-child(4) h2 {
    font-size: 16pt;
    text-align: center;
    color: #ff5cf0;
  }

  .content:nth-child(4) p {
    font-size: 13pt;
    text-align: center;
  }

  /* ---------------------------- QUINTO COMPONENTE --------------------------- */

  .content:nth-child(5) {
    padding: 64px 16px;
    background: rgba(192, 183, 211, 0.1);
  }

  .content:nth-child(5) h2 {
    font-size: 16pt;
    text-align: center;
    color: #ff5cf0;
  }

  .content:nth-child(5) .card {
    display: flex;
    color: #5c22d8;
    width: 300px;
    height: 150px;
    margin: auto;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.25);
    background: #fff;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 64px;
  }

  .content:nth-child(5) .card h3 {
    font-size: 14pt;
  }

  .content:nth-child(5) .card p {
    font-size: 11pt;
  }

  .content:nth-child(5) .card img {
    margin: 16px;
  }

  /* -------------------------------------------------------------------------- */
  /*                                   TABLET                                   */
  /* -------------------------------------------------------------------------- */

  @media (min-width: 680px) {
    .content {
      font-size: 20pt;
      padding: 48px 32px;
    }

    /* --------------------------- PRIMEIRO COMPONENTE -------------------------- */

    .content:nth-child(1) div {
      font-size: 16pt;
      padding-left: 16px;
    }

    /* --------------------------- SEGUNDO COMPONENTE --------------------------- */

    .content:nth-child(2) {
      padding: 48px 32px;
      padding-bottom: 228px;
    }

    .content:nth-child(2) h1 {
      font-size: 32pt;
      max-width: 600px;
    }

    .content:nth-child(2) div {
      font-size: 14pt;
      padding-left: 16px;
      max-width: 600px;
    }

    /* --------------------------- TERCEIRO COMPONENTE -------------------------- */
    .content:nth-child(3) {
      height: 380px;
    }

    .content:nth-child(3) span {
      position: absolute;
      border-radius: 8px;
      padding: 16px 24px;
      margin-right: 64px;
      transform: translateY(-228px);
      height: 520px;
      max-width: 400px;
    }

    .content:nth-child(3) lottie-player {
      display: initial;
    }

    .content:nth-child(3) p {
      font-size: 11pt;
    }
    .content:nth-child(3) h3 {
      font-size: 11pt;
    }

    .content:nth-child(3) h2 {
      font-size: 12pt;
    }

    /* ---------------------------- QUARTO COMPONENTE --------------------------- */
    .content:nth-child(4) section {
      max-width: 720px;
      margin: auto;
      margin-bottom: 32px;
    }

    .content:nth-child(4) h2 {
      font-size: 18pt;
    }

    /* ---------------------------- QUINTO COMPONENTE --------------------------- */

    .content:nth-child(5) h2 {
      font-size: 18pt;
      margin-bottom: 48px;
    }

    .content:nth-child(5) .card-container {
      display: flex;
      margin: auto;
      max-width: 780px;
      justify-content: space-around;
    }
  }

  @media (min-width: 1024px) {
    .content > section {
      max-width: 1170px;
      margin: auto;
    }

    .content:nth-child(1) section {
      display: flex;
      align-items: center;
    }
    .content:nth-child(1) lottie-player {
      display: initial;
      position: absolute;
      right: 0;
      z-index: -1;
      width: 500px;
      opacity: 70%;
    }

    .content:nth-child(1) h1 {
      width: 780px;
      font-size: 48pt;
    }

    .content:nth-child(1) p {
      width: 780px;
      font-size: 24pt;
    }

    .content:nth-child(3) lottie-player {
      display: initial;
    }

    .content:nth-child(3) span {
      position: absolute;
      border-radius: 8px;
      padding: 16px 24px;
      margin-right: 10%;
      transform: translateY(-308px);
      height: 520px;
      max-width: 400px;
    }
  }
`;
