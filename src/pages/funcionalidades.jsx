import { Fab, Grow, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dashboardImg from '../static/image/dashboard.png';
import vetor from '../static/svg/pages/funcionalidades/vetor.svg';

export default class Funcionalidades extends React.Component {
  constructor() {
    super();

    this.state = {
      activeStep: 0,
    };
  }

  render() {
    const handleNext = () => {
      this.setState({ activeStep: this.state.activeStep + 1 });
    };
    const handlePrev = () => {
      this.setState({ activeStep: this.state.activeStep - 1 });
    };
    return (
      <>
        <Head>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Head>
        <Header />
        <Container>
          <div className="content">
            <div className="item">
              <div>
                <h1>FUNCIONALIDADES QUE FARÃO O SEU NEGÓCIO DECOLAR</h1>
                <p>
                  Aqui você conta com um pacote de funcionalidades perfeitas para o controle e a
                  gestão do seu negócio.
                </p>
              </div>
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_e16yAs.json"
                speed="1"
                style={{ width: 450, height: 450 }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <img className="vetor" src={vetor} />

          {/* -------------------------------- DASHBOARD ------------------------------- */}
          {this.state.activeStep === 0 ? (
            <div className="item step">
              <div className="text">
                <h1>DASHBOARD</h1>

                <p>
                  Com webstock você tem uma coletânea de dados estatísticos para analisar, sem
                  chutômetro.
                </p>
                <p>
                  Confira todos seus rendimentos, gastos, contas, vendas dentre outros em nosso
                  poderoso dashboard. Além disso você ainda conta com mini gráficos relativos em
                  cada uma das páginas de relatórios, por exemplo.
                </p>
              </div>
              <div className="image">
                <div className="button">
                  <Fab
                    size="small"
                    onClick={handlePrev}
                    disabled={this.state.activeStep === 0}
                    color="primary"
                  >
                    <KeyboardArrowLeft />
                  </Fab>
                  <Fab
                    size="small"
                    onClick={handleNext}
                    disabled={this.state.activeStep === 5}
                    color="primary"
                  >
                    <KeyboardArrowRight />
                  </Fab>
                </div>
                <Grow in={this.state.activeStep === 0}>
                  <img src={dashboardImg} alt="dashboard" className="app-image" />
                </Grow>
                <MobileStepper
                  className="stepper"
                  activeStep={this.state.activeStep}
                  variant="dots"
                  steps={6}
                  position="static"
                  nextButton={<div />}
                  backButton={<div />}
                />
              </div>
              <p>
                Com webstock você tem uma coletânea de dados estatísticos para analisar, sem
                chutômetro.
              </p>
              <p>
                Confira todos seus rendimentos, gastos, contas, vendas dentre outros em nosso
                poderoso dashboard. Além disso você ainda conta com mini gráficos relativos em cada
                uma das páginas de relatórios, por exemplo.
              </p>
            </div>
          ) : (
            <div />
          )}

          {/* -------------------------------- PRODUTOS -------------------------------- */}

          {this.state.activeStep === 1 ? (
            <div className="item step">
              <div className="text">
                <h1>PRODUTOS</h1>

                <p>
                  Você controla todos seus produtos de maneira fácil e rápida. Estoque, compras,
                  vendas, tudo isso em um único lugar.
                </p>
              </div>

              <div className="image">
                <div className="button">
                  <Fab
                    size="small"
                    onClick={handlePrev}
                    disabled={this.state.activeStep === 0}
                    color="primary"
                  >
                    <KeyboardArrowLeft />
                  </Fab>
                  <Fab
                    size="small"
                    onClick={handleNext}
                    disabled={this.state.activeStep === 5}
                    color="primary"
                  >
                    <KeyboardArrowRight />
                  </Fab>
                </div>

                <Grow in={this.state.activeStep === 1}>
                  <img src={dashboardImg} alt="dashboard" className="app-image" />
                </Grow>
                <MobileStepper
                  className="stepper"
                  activeStep={this.state.activeStep}
                  variant="dots"
                  steps={6}
                  position="static"
                  nextButton={<div />}
                  backButton={<div />}
                />
              </div>
              <p>
                Você controla todos seus produtos de maneira fácil e rápida. Estoque, compras,
                vendas, tudo isso em um único lugar.
              </p>
            </div>
          ) : (
            <div />
          )}

          {/* ------------------------------- FINANCEIRO ------------------------------- */}
          {this.state.activeStep === 2 ? (
            <div className="item step">
              <div className="text">
                <h1>FINANCEIRO</h1>
                <p>
                  Cadastre suas contas bancarias, controle o fluxo de saída e entrada de dinheiro em
                  sua empresa, saiba quais ações tomar com antecedência.
                </p>
              </div>

              <div className="image">
                <div className="button">
                  <Fab
                    size="small"
                    onClick={handlePrev}
                    disabled={this.state.activeStep === 0}
                    color="primary"
                    style={{ marginLeft: 16 }}
                  >
                    <KeyboardArrowLeft />
                  </Fab>
                  <Fab
                    size="small"
                    onClick={handleNext}
                    disabled={this.state.activeStep === 5}
                    color="primary"
                    style={{ marginRight: 16 }}
                  >
                    <KeyboardArrowRight />
                  </Fab>
                </div>

                <Grow in={this.state.activeStep === 2}>
                  <img src={dashboardImg} alt="dashboard" className="app-image" />
                </Grow>
                <MobileStepper
                  className="stepper"
                  activeStep={this.state.activeStep}
                  variant="dots"
                  steps={6}
                  position="static"
                  nextButton={<div />}
                  backButton={<div />}
                />
              </div>
              <p>
                Cadastre suas contas bancarias, controle o fluxo de saída e entrada de dinheiro em
                sua empresa, saiba quais ações tomar com antecedência.
              </p>
            </div>
          ) : (
            <div />
          )}

          {/* ------------------------------ FUNCIONÁRIOS ------------------------------ */}

          {this.state.activeStep === 3 ? (
            <div className="item step">
              <div className="text">
                <h1>FUNCIONÁRIOS</h1>

                <p>
                  Separe detalhadamente os relatorios de atividade de cada um de seus funcionarios
                  com a praticidade que você precisa.
                </p>
              </div>

              <div className="image">
                <div className="button">
                  <Fab
                    size="small"
                    onClick={handlePrev}
                    disabled={this.state.activeStep === 0}
                    color="primary"
                    style={{ marginLeft: 16 }}
                  >
                    <KeyboardArrowLeft />
                  </Fab>
                  <Fab
                    size="small"
                    onClick={handleNext}
                    disabled={this.state.activeStep === 5}
                    color="primary"
                    style={{ marginRight: 16 }}
                  >
                    <KeyboardArrowRight />
                  </Fab>
                </div>

                <Grow in={this.state.activeStep === 3}>
                  <img src={dashboardImg} alt="dashboard" className="app-image" />
                </Grow>
                <MobileStepper
                  className="stepper"
                  activeStep={this.state.activeStep}
                  variant="dots"
                  steps={6}
                  position="static"
                  nextButton={<div />}
                  backButton={<div />}
                />
              </div>
              <p>
                Separe detalhadamente os relatorios de atividade de cada um de seus funcionarios com
                a praticidade que você precisa.
              </p>
            </div>
          ) : (
            <div />
          )}

          {/* -------------------------------- CLIENTES -------------------------------- */}

          {this.state.activeStep === 4 ? (
            <div className="item step">
              <div className="text">
                <h1>CLIENTES</h1>

                <p>
                  Controle seus clientes de maneira descomplicada, não perca prazos de pagamentos,
                  saiba quando e quanto cobrar.
                </p>
              </div>

              <div className="image">
                <div className="button">
                  <Fab
                    size="small"
                    onClick={handlePrev}
                    disabled={this.state.activeStep === 0}
                    color="primary"
                    style={{ marginLeft: 16 }}
                  >
                    <KeyboardArrowLeft />
                  </Fab>
                  <Fab
                    size="small"
                    onClick={handleNext}
                    disabled={this.state.activeStep === 5}
                    color="primary"
                    style={{ marginRight: 16 }}
                  >
                    <KeyboardArrowRight />
                  </Fab>
                </div>

                <Grow in={this.state.activeStep === 4}>
                  <img src={dashboardImg} alt="dashboard" className="app-image" />
                </Grow>
                <MobileStepper
                  className="stepper"
                  activeStep={this.state.activeStep}
                  variant="dots"
                  steps={6}
                  position="static"
                  nextButton={<div />}
                  backButton={<div />}
                />
              </div>
              <p>
                Controle seus clientes de maneira descomplicada, não perca prazos de pagamentos,
                saiba quando e quanto cobrar.
              </p>
            </div>
          ) : (
            <div />
          )}

          {/* ------------------------------ FORNECEDORES ------------------------------ */}

          {this.state.activeStep === 5 ? (
            <div className="item step">
              <div className="text">
                <h1>FORNECEDORES</h1>

                <p>
                  Tenha o controle de seus fornecedores, saiba onde comprar cada tipo de produto sem
                  ter de pensar muito.
                </p>
              </div>

              <div className="image">
                <div className="button">
                  <Fab
                    size="small"
                    onClick={handlePrev}
                    disabled={this.state.activeStep === 0}
                    color="primary"
                    style={{ marginLeft: 16 }}
                  >
                    <KeyboardArrowLeft />
                  </Fab>
                  <Fab
                    size="small"
                    onClick={handleNext}
                    disabled={this.state.activeStep === 5}
                    color="primary"
                    style={{ marginRight: 16 }}
                  >
                    <KeyboardArrowRight />
                  </Fab>
                </div>

                <Grow in={this.state.activeStep === 5}>
                  <img src={dashboardImg} alt="dashboard" className="app-image" />
                </Grow>
                <MobileStepper
                  className="stepper"
                  activeStep={this.state.activeStep}
                  variant="dots"
                  steps={6}
                  position="static"
                  nextButton={<div />}
                  backButton={<div />}
                />
              </div>
              <p>
                Tenha o controle de seus fornecedores, saiba onde comprar cada tipo de produto sem
                ter de pensar muito.
              </p>
            </div>
          ) : (
            <div />
          )}

          <Footer />
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  padding-top: 70px;

  .step .text p {
    display: none;
  }

  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;

    color: rgba(255, 255, 255, 0.8);
  }

  .item:nth-child(1) p {
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: rgba(255, 255, 255, 0.7);

    padding-left: 16px;
    border-left: 4px solid #ff5cf0;
  }

  .item {
    padding: 16px;
    max-width: 1170px;
  }

  .vetor {
    width: 100%;
    transform: translateY(-2px);
  }

  .content {
    margin: auto;
    background: #5c22d8;
  }

  .app-image {
    width: 100%;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }

  .stepper {
    transform: translateY(-50px);
  }

  .step {
    min-height: 580px;
    transform: translateY(-100px);
  }

  .step p {
    padding-left: 8px;
    color: rgba(0, 0, 0, 0.7);
  }

  .step h1 {
    font-size: 28px;
    color: rgba(0, 0, 0, 0.8);
  }

  .step .button {
    display: flex;
    justify-content: space-between;
    width: 90%;
    position: absolute;
    z-index: 1;
  }

  .step .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 56px;
    }

    .item:nth-child(1) p {
      font-size: 26px;
    }

    .item {
      padding: 32px;
    }

    .step {
      transform: translateY(-132px);
    }

    .step h1 {
      font-size: 48px;
    }

    .step p {
      font-size: 18px;
    }
  }

  @media (min-width: 1170px) {
    .item:nth-child(1) {
      display: flex;
      align-items: center;
    }
    h1 {
      font-size: 64px;
    }

    .step .text p {
      display: initial;
    }

    .item {
      margin: auto;
    }

    .step {
      display: flex;
      align-items: flex-start;
      margin: auto;
    }

    .step > p {
      display: none;
    }

    .step .image {
      width: 60%;
      padding: 32px;
    }

    .step .text {
      width: 40%;
      padding: 32px;
    }

    .step .button {
      width: 50%;
    }
  }
`;
