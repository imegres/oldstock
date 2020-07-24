import { Button } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import chain from '../static/svg/chain.svg';
import cloud from '../static/svg/cloud.svg';
import wave from '../static/svg/indexWave.svg';
import note from '../static/svg/note.svg';
import support from '../static/svg/support.svg';

export default class Index extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-140182307-3');
    ReactGA.pageview('webstock' + window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Body>
        <Head>
          <title>Webstock | Sistema ERP gratuíto</title>
          <meta
            name="description"
            content="Webstock é um sistema ERP, destinado a gestão de pequenos negócios, aqui você controla suas vendas, estoque, produtos, fornecedores, pagamentos, clientes e muito mais!"
          />
          <meta name="keywords" content="controle, estoque, produtos, vendas, compras, clientes" />
          <meta name="author" content="José Augusto Megres de Oliveira" />
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Head>
        <Header background="#5c22d8" />

        <div className="container">
          {/* -------------------------------------------------------------------------- */}
          {/*                              PRIMEIRO CONTEÚDO                             */}
          {/* -------------------------------------------------------------------------- */}
          <div className="content">
            <div>
              <section className="text">
                <h1>Gerir o seu negócio pode ser muito mais simples</h1>
                <p>
                  Aqui na webstock nós valorizamos a simplicidade do negócio, e buscamos sempre
                  tornar sua gestão mais ágil, simples e descomplicada.
                </p>
                <Button color="secondary" variant="contained">
                  Teste gratuitamente
                </Button>
              </section>

              <div className="animation">
                <lottie-player
                  src="https://assets1.lottiefiles.com/packages/lf20_2gjZuP.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
          <img src={wave} alt="wave" />
          {/* -------------------------------------------------------------------------- */}
          {/*                              SEGUNDO CONTEÚDO                              */}
          {/* -------------------------------------------------------------------------- */}
          <div className="content">
            <div>
              <section>
                <h1>
                  Disponível quando e onde você precisar<span>!</span>
                </h1>
                <div>
                  <p>
                    Aqui na webstock nós valorizamos a simplicidade do negócio, e buscamos sempre
                    tornar sua gestão mais ágil, simples e descomplicada.
                  </p>
                </div>

                <Button style={{ marginRight: 8 }} color="primary" variant="contained">
                  Funcionalidades
                </Button>
              </section>
              <section>
                <div className="card">
                  <h2>Por que eu devo assinar a webstock?</h2>

                  <section>
                    <h3>1. Nunca perca seus prazos</h3>
                    <p>
                      Houve alguma vez que você se esqueceu de pagar algum fornecedor? Se sim eis
                      aqui o primeiro motivo, webstock te dá um relatório de todos seus pagamentos
                      após o cadastro, além disso avisamos com antecedência os prazos de seus
                      pagamentos.
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
                      Não é necessário ficar acumulando documento na “caixinha”, webstock oferece
                      uma solução em nuvem, para que você tenha facilidade no acesso de suas
                      informações, sem ter que ficar revirando papel.
                    </p>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <img src={wave} className="wave-inverted" alt="wave" />
          <div className="content">
            <section>
              <h1>O que mais oferecemos?</h1>

              <div className="card-container">
                <div className="small-card">
                  <img src={support} alt="support" />
                  <section>
                    <h3>Suporte ativo!</h3>
                    <p>
                      Bateu aquela dúvida? É só contatar nosso suporte e estaremos sempre dispostos
                      a ajudar! ;)
                    </p>
                  </section>
                </div>

                <div className="small-card">
                  <img src={cloud} alt="cloud" />
                  <section>
                    <h3>Alta disponibilidade</h3>
                    <p>
                      Nosso sistema está sempre disponível, tudo o que você precisa é de uma conexão
                      com a internet
                    </p>
                  </section>
                </div>

                <div className="small-card">
                  <img src={chain} alt="chain" />
                  <section>
                    <h3>Sem compromisso</h3>
                    <p>
                      Precisa cancelar o plano? É fácil e simples, você não irá receber surpresas na
                      fatura do seu cartão
                    </p>
                  </section>
                </div>

                <div className="small-card">
                  <img src={note} alt="note" />
                  <section>
                    <h3>Sem dificuldade</h3>
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
  .content {
    font-size: 14pt;
    padding: 16px;
  }

  .wave-inverted {
    transform: rotate(180deg) translateY(-8px);
  }

  .content h1 {
    text-transform: uppercase;
  }

  /* --------------------------- PRIMEIRO COMPONENTE -------------------------- */
  .content:nth-child(1) {
    background: #5c22d8;
  }
  .content:nth-child(1) h1 {
    color: rgba(255, 255, 255, 0.9);
  }

  .content:nth-child(1) p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 11pt;
    border-left: 3px solid #ff5cf0;
    padding-left: 8px;
  }

  .content:nth-child(1) .text {
    width: 100%;
  }

  .content:nth-child(1) .animation {
    max-width: 450px;
    margin: auto;
    width: 100%;
  }

  .content:nth-child(1) h1 {
    font-size: 32pt;
  }

  .content:nth-child(1) p {
    font-size: 14pt;
  }

  @media (min-width: 720px) {
    .content:nth-child(1) div {
      display: flex;
      align-items: center;
    }

    .content:nth-child(1) .text {
      width: 70%;
    }

    .content:nth-child(1) .animation {
      width: 30%;
    }

    .content:nth-child(1) h1 {
      font-size: 32pt;
    }

    .content:nth-child(1) p {
      font-size: 14pt;
    }
  }

  @media (min-width: 1024px) {
    .content:nth-child(1) > div {
      max-width: 1170px;
      width: 100%;
      margin: auto;
    }

    .content:nth-child(1) .text {
      width: 60%;
    }

    .content:nth-child(1) .animation {
      width: 40%;
    }

    .content:nth-child(1) div {
      display: flex;
      align-items: center;
    }

    .content:nth-child(1) h1 {
      font-size: 36pt;
    }

    .content:nth-child(1) p {
      font-size: 16pt;
    }
  }

  /* --------------------------- SEGUNDO COMPONENTE --------------------------- */

  .content .card {
    width: 350px;
    background: #5c22d8;
    padding: 32px;
    transform: translateY(-20px);
    border-radius: 8px;

    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15);

    h2 {
      margin-top: 0;
      color: #fff;
      opacity: 0.9;
      font-size: 14pt;
    }

    h3 {
      color: #fff;
      opacity: 0.9;
      font-size: 12pt;
    }

    p {
      color: #fff;
      opacity: 0.9;
      font-size: 10pt;
    }
  }

  .content:nth-child(3) > div {
    max-width: 1170px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .content:nth-child(3) h1 {
    font-size: 36pt;
    color: rgba(0, 0, 0, 0.8);
  }

  .content:nth-child(3) p {
    font-size: 16pt;
    color: rgba(0, 0, 0, 0.7);
  }

  .content:nth-child(3) .card p {
    font-size: 10pt;
    color: #fff;
  }

  @media (max-width: 480px) {
    .content:nth-child(3) .card {
      width: 80%;
      margin: auto;
      margin-top: 32px;
    }
  }

  @media (max-width: 720px) {
    .content:nth-child(3) .card {
      margin-top: 32px;
      margin: auto;
      width: 70%;
      transform: translateY(30px);
      margin-bottom: 32px;
    }
  }

  @media (min-width: 720px) {
    .content:nth-child(3) > div {
      flex-direction: row;
      align-items: center;
    }
  }

  /* --------------------------- TERCEIRO COMPONENTE -------------------------- */

  .content:nth-child(5) {
    background: #5c22d8;
  }

  .content:nth-child(5) h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 64px;
  }

  .content:nth-child(5) .small-card {
    background: #fff;
    width: 400px;
    padding: 16px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15);
    text-align: center;
  }

  .content:nth-child(5) .card-container {
    display: flex;
    max-width: 1170px;
    margin: auto;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
  }
`;
