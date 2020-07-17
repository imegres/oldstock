import { Fab, Grow, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dashboardImg from '../static/image/dashboard.png';
import vetor from '../static/svg/pages/funcionalidades/vetor.svg';

import pattern from '../static/svg/background_icons/pattern.svg';

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
          <title>Funcionalidades</title>
          <meta
            name="description"
            content="A webstock contém diversas funcionalidades que vão desde um dashboard completo até relatórios em excel!"
          />
          <meta
            name="keywords"
            content="dashboard, erp, gestão financeira, cadastro, produtos, vendas, de, sistema"
          />
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Head>
        <Header background="#5c22d8" />
        <Container>
          <div className="content">
            <div className="item">
              <div>
                <h1>A aplicação que fará o seu negócio decolar</h1>
                <p>
                  Aqui você conta com um pacote de funcionalidades que comunicam-se entre si e que
                  são perfeitas para o controle e a gestão do seu negócio.
                </p>
              </div>
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_e16yAs.json"
                speed="1"
                className="rocket"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <img className="vetor" src={vetor} alt="vetor" />

          {/* -------------------------------- DASHBOARD ------------------------------- */}
          <div className="item step" style={{ display: this.state.activeStep == 0 ? '' : 'none' }}>
            <div className="text">
              <h1>Dashboard</h1>

              <p>
                Com webstock você tem uma coletânea de dados estatísticos para analisar, sem
                chutômetro.
              </p>
              <br />
              <br />
              <p>
                Confira todos seus rendimentos, gastos, contas, vendas dentre outros em nosso
                poderoso dashboard. Além disso você ainda conta com mini gráficos relativos em cada
                uma das páginas de relatórios, por exemplo.
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
              Confira todos seus rendimentos, gastos, contas, vendas dentre outros em nosso poderoso
              dashboard. Além disso você ainda conta com mini gráficos relativos em cada uma das
              páginas de relatórios, por exemplo.
            </p>
          </div>

          {/* -------------------------------- PRODUTOS -------------------------------- */}

          <div className="item step" style={{ display: this.state.activeStep == 1 ? '' : 'none' }}>
            <div className="text">
              <h1>Produtos</h1>

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
              Você controla todos seus produtos de maneira fácil e rápida. Estoque, compras, vendas,
              tudo isso em um único lugar.
            </p>
          </div>
          {/* ------------------------------- FINANCEIRO ------------------------------- */}
          <div className="item step" style={{ display: this.state.activeStep == 2 ? '' : 'none' }}>
            <div className="text">
              <h1>Financeiro</h1>
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
              Cadastre suas contas bancarias, controle o fluxo de saída e entrada de dinheiro em sua
              empresa, saiba quais ações tomar com antecedência.
            </p>
          </div>

          {/* ------------------------------ FUNCIONÁRIOS ------------------------------ */}

          <div className="item step" style={{ display: this.state.activeStep == 3 ? '' : 'none' }}>
            <div className="text">
              <h1>Funcionários</h1>

              <p>
                Separe detalhadamente os relatórios de atividade de cada um de seus funcionários com
                a praticidade que você precisa.
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
              Separe detalhadamente os relatórios de atividade de cada um de seus funcionários com a
              praticidade que você precisa.
            </p>
          </div>

          {/* -------------------------------- CLIENTES -------------------------------- */}

          <div className="item step" style={{ display: this.state.activeStep == 4 ? '' : 'none' }}>
            <div className="text">
              <h1>Clientes</h1>

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
              Controle seus clientes de maneira descomplicada, não perca prazos de pagamentos, saiba
              quando e quanto cobrar.
            </p>
          </div>

          {/* ------------------------------ FORNECEDORES ------------------------------ */}

          <div className="item step" style={{ display: this.state.activeStep == 5 ? '' : 'none' }}>
            <div className="text">
              <h1>Fornecedores</h1>

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
              Tenha o controle de seus fornecedores, saiba onde comprar cada tipo de produto sem ter
              de pensar muito.
            </p>
          </div>

          <Footer />
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  transform: translateY(-2px);

  .bg_icon {
    display: block;
    position: absolute;
    max-width: 50px;
    z-index: 0;
    transform: translate(390px, -150px);
  }

  .step .text p {
    display: none;
  }

  h1 {
    z-index: 100;
    font-size: 36px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.9);
  }

  .item p {
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: rgba(255, 255, 255, 0.9);

    padding-left: 16px;
    border-left: 4px solid #ff5cf0;
  }

  .item {
    padding: 16px;
    max-width: 1170px;
  }

  .vetor {
    width: 100%;
    max-width: 100%;
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
    transform: translateY(-50px);
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

    .item p {
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
    .item {
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
