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
import funcWave from '../static/svg/funcWave.svg';
import clientesImg from '../static/image/clientes.png';
import dashboardImg from '../static/image/dashboard.png';
import financeiroImg from '../static/image/financeiro.png';
import fornecedoresImg from '../static/image/fornecedores.png';
import funcionariosImg from '../static/image/funcionarios.png';
import produtosImg from '../static/image/produtos.png';
import note from '../static/svg/note.svg';
import support from '../static/svg/support.svg';
import { Fab, Grow, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
const tawkTo = require('tawkto-react');

export default class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      activeStep: 0,
    };
  }

  componentDidMount() {
    tawkTo('5f2aff005c885a1b7fb6a211');
    ReactGA.initialize('UA-140182307-3');
    ReactGA.pageview('webstock' + window.location.pathname + window.location.search);
  }

  render() {
    let totalSteps = 5;
    const handleNext = () => {
      if (this.state.activeStep == totalSteps) {
        this.setState({ activeStep: 0 });
      } else {
        this.setState({ activeStep: this.state.activeStep + 1 });
      }
    };
    const handlePrev = () => {
      if (this.state.activeStep == 0) {
        this.setState({ activeStep: totalSteps });
      } else {
        this.setState({ activeStep: this.state.activeStep - 1 });
      }
    };
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

        <div id="inicio" className="container">
          {/* -------------------------------------------------------------------------- */}
          {/*                              PRIMEIRO CONTEÚDO                             */}
          {/* -------------------------------------------------------------------------- */}
          <section className="content">
            <div>
              <div>
                <h1>Gerir seu negócio pode ser simples!</h1>
                <p>
                  Aqui na webstock nós valorizamos a simplicidade do negócio, e buscamos sempre
                  tornar sua gestão mais ágil, simples e descomplicada.
                </p>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => {
                    window.location.assign('http://app.webstock.com.br/login');
                  }}
                >
                  Teste gratuitamente
                </Button>
              </div>

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
          </section>
          <img src={wave} style={{ transform: 'translateY(5px)' }} alt="wave" />
          {/* -------------------------------------------------------------------------- */}
          {/*                              SEGUNDO CONTEÚDO                              */}
          {/* -------------------------------------------------------------------------- */}

          <section className="content">
            <div>
              <div className="text">
                <div>
                  <h1>Disponível quando e onde você precisar</h1>
                  <p>
                    Nosso sistema está sempre disponível para que você possa acessa-lo de qualquer
                    lugar do Brasil, tudo o que você precisa é de uma conexão com a internet e você
                    poderá estar acessando de seu computador ou dispositivo móvel. Deixe-nos
                    acompanha-lo nesta jornada e "bora" crescer juntos!
                  </p>
                </div>
                <div>
                  <h1>Qual o valor da assinatura?</h1>
                  <p>
                    Este é um projeto apenas para fins educativos, não há interesse comercial.
                  </p>
                </div>
              </div>
              <div className="card">
                <h1>Por que eu devo utilizar a webstock?</h1>

                <div>
                  <h2>1. Nunca perca seus prazos</h2>
                  <p>
                    Houve alguma vez que você se esqueceu de pagar algum fornecedor? Se sim eis aqui
                    o primeiro motivo, webstock te dá um relatório de todos seus pagamentos após o
                    cadastro, além disso avisamos se você deixar passar algum pagamento.
                  </p>
                </div>

                <div>
                  <h2>2. Controle tudo com precisão</h2>
                  <p>
                    Se um cliente te solicitasse um relatório de uma compra, com data, prazos e
                    valores, você teria tudo na mão? Temos todos os relatórios em nuvem, onde você
                    pode acessar até mesmo de seu dispositivo móvel.
                  </p>
                </div>
                <div>
                  <h2>3. Cresça</h2>
                  <p>
                    Aqui temos outro ponto, você consegue acompanhar se sua empresa está ou não
                    crescendo, webstock ajuda você a facilitar sua tomada de decisões.
                  </p>
                </div>

                <div>
                  <h2>4. Nada de papelzinho</h2>
                  <p>
                    Não é necessário ficar acumulando documento na “caixinha”, webstock oferece uma
                    solução em nuvem, para que você tenha facilidade no acesso de suas informações,
                    sem ter que ficar revirando papel.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <img
            src={wave}
            style={{
              transform: 'rotate(180deg) translateY(2px)',
              zIndex: 1,
              position: 'absolute',
            }}
            alt="wave"
          />

          <section id="funcionalidades" className="content">
            {/* -------------------------------------------------------------------------- */}
            {/*                                  DASHBOARD                                 */}
            {/* -------------------------------------------------------------------------- */}

            <div style={{ display: this.state.activeStep == 0 ? '' : 'none' }}>
              <div className="text">
                <h1>Dashboard</h1>

                <p>
                  Com webstock você tem uma coletânea de dados estatísticos para analisar, sem
                  chutômetro. Saiba sempre qual a decisão certa a se tomar em cada situação, mova
                  seu negócio de forma estratégica.
                </p>
                <p>
                  Temos uma página de resumo para que você não tenha que ficar catando milho e
                  juntando os seus dados, tenha todos eles compactados na página de dashboard, sem
                  nenhum tipo de dificuldade, você tem um checkup completo de seu negócio.
                </p>
              </div>
              <div className="image">
                <img src={dashboardImg}></img>
                <div className="button">
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handlePrev} color="primary">
                      <KeyboardArrowLeft />
                    </Fab>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handleNext} color="primary">
                      <KeyboardArrowRight />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------- PRODUTOS -------------------------------- */}

            <div style={{ display: this.state.activeStep == 1 ? '' : 'none' }}>
              <div className="text">
                <h1>Produtos</h1>

                <p>
                  Os seus produtos são controlados de forma eficaz na webstock, aqui você consegue
                  mensurar cada um deles, atrelando estes a fornecedores e categorias, mantendo a
                  organização, e é claro, não deixando seu estoque acabar.
                </p>
                <p>
                  Com o nosso sistema de frente de caixa, você realiza suas vendas, e já tem o
                  desconto automático de estoque, além disso, você pode definir uma quantidade
                  mínima de estoque para cada produto individualmente, e sempre que esta quantidade
                  for atingida, o sistema irá avisa-lo.
                </p>
              </div>

              <div className="image">
                <img src={produtosImg}></img>
                <div className="button">
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handlePrev} color="primary">
                      <KeyboardArrowLeft />
                    </Fab>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handleNext} color="primary">
                      <KeyboardArrowRight />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------- FINANCEIRO ------------------------------- */}
            <div style={{ display: this.state.activeStep == 2 ? '' : 'none' }}>
              <div className="text">
                <h1>Financeiro</h1>
                <p>
                  O seu dinheiro separado e contado, é assim que podemos dizer, pois aqui na
                  webstock, você cadastra seu caixa e contas bancárias, e sempre que for realizar
                  uma movimentação financeira, você insere no sistema e pronto, além de ter o
                  registro daquela movimentação, também terá suas contas atualizadas.
                </p>
                <p>
                  E é claro, não podemos esquecer as vendas de produtos, sempre que as realizar, é
                  só selecionar a conta para qual o dinheiro vai, e sempre que o cliente realizar o
                  pagamento das parcelas da compra, suas contas serão atualizadas na hora.
                </p>
              </div>

              <div className="image">
                <img src={financeiroImg}></img>
                <div className="button">
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handlePrev} color="primary">
                      <KeyboardArrowLeft />
                    </Fab>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handleNext} color="primary">
                      <KeyboardArrowRight />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------- FUNCIONÁRIOS ------------------------------- */}
            <div style={{ display: this.state.activeStep == 3 ? '' : 'none' }}>
              <div className="text">
                <h1>Funcionários</h1>
                <p>
                  Aqui na webstock além de conseguir criar mais de uma empresa, você pode convidar
                  outros membros para gerenciar uma ou várias de suas empresas, desta forma, fica
                  muito fácil descobrir quais são os funcionários que mais vendem em sua empresa.
                </p>
                <p>
                  E é claro, o funcionário não precisara de seu acesso para entrar no sistema, cada
                  um deles terão o próprio acesso. Olha que bacana!
                </p>
              </div>

              <div className="image">
                <img src={funcionariosImg}></img>
                <div className="button">
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handlePrev} color="primary">
                      <KeyboardArrowLeft />
                    </Fab>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handleNext} color="primary">
                      <KeyboardArrowRight />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------- CLIENTES -------------------------------- */}

            <div style={{ display: this.state.activeStep == 4 ? '' : 'none' }}>
              <div className="text">
                <h1>Clientes</h1>

                <p>
                  Com o cadastro de clientes, você tem na palma da mão todos seus clientes,
                  incluindo as informações de cada um deles.
                </p>
                <p>
                  É possível também controlar se um cliente esquecer se pagar uma parcela por
                  exemplo, ou então verificar quais produtos cada um de seus clientes comprou.
                </p>
              </div>

              <div className="image">
                <img src={clientesImg}></img>
                <div className="button">
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handlePrev} color="primary">
                      <KeyboardArrowLeft />
                    </Fab>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handleNext} color="primary">
                      <KeyboardArrowRight />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------ FORNECEDORES ------------------------------ */}

            <div style={{ display: this.state.activeStep == 5 ? '' : 'none' }}>
              <div className="text">
                <h1>Fornecedores</h1>

                <p>
                  Aqui você também pode gerenciar seus fornecedores, deixando suas contas em dia.
                  Avisamos com antecedência sempre que você tiver um pagamento se aproximando,
                  ajudando você a ter total controle de suas contas.
                </p>
                <p>
                  Você também tem um controle a dedo de cada um de seus fornecedores, como endereço,
                  telefone, dados comerciais e etc...
                </p>
              </div>

              <div className="image">
                <img src={fornecedoresImg}></img>
                <div className="button">
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handlePrev} color="primary">
                      <KeyboardArrowLeft />
                    </Fab>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Fab size="small" onClick={handleNext} color="primary">
                      <KeyboardArrowRight />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <img src={funcWave} alt="wave" style={{ position: 'absolute' }} />
        </div>

        <Footer />
      </Body>
    );
  }
}

const Body = styled.div`
  color: rgb(39, 48, 54);

  .animation {
    max-width: 400px;
  }
  section:nth-child(1) {
    background: #fff;
    transform: translateY(15%);
    padding-top: 32px;
  }
  section:nth-child(1) > div {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
    max-width: 1170px;

    @media (max-width: 720px) {
      lottie-player {
        display: none;
      }
    }

    div:nth-child(1) {
      flex: 0.7;
      @media (max-width: 720px) {
        margin: 16px;
        flex: 1;
      }
    }

    h1 {
      font-size: 32pt;
    }

    p {
      font-size: 14pt;
    }
  }
  section:nth-child(3) {
    background: #f3f4f5;
  }
  section:nth-child(3) > div {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
    max-width: 1170px;
    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 32pt;
      margin-top: 0;
    }

    p {
      font-size: 14pt;
    }

    .text {
      align-self: flex-start;
      flex: 0.7;
      @media (max-width: 980px) {
        margin: 16px;
      }
    }
    .card {
      color: #fff;
      background: #5c22d8;
      max-width: 420px;
      border-radius: 8px;
      padding: 32px;
      margin-left: auto;
      @media (max-width: 980px) {
        margin-left: 0;
      }

      h1 {
        font-size: 18pt;
      }

      h2 {
        font-size: 12pt;
      }

      p {
        font-size: 11pt;
      }
    }
  }

  section:nth-child(5) {
    background: #5c22d8;
    padding-top: 13rem;
    color: rgba(255, 255, 255, 0.9);
  }

  section:nth-child(5) .text {
    flex: 0.4;
    align-self: flex-start;
    height: 400px;
  }

  section:nth-child(5) .image {
    flex: 0.4;
    z-index: 2;
    position: relative;

    img {
      max-width: 95%;
      width: 650px;
      border-radius: 16px;
    }

    .button {
      display: flex;
      position: absolute;
      flex: 1;
      top: 0px;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }

  section:nth-child(5) > div {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
    max-width: 1170px;
    padding: 16px;

    @media (max-width: 980px) {
      flex-direction: column;
    }

    div:nth-child(5) {
      flex: 0.7;
    }

    h1 {
      font-size: 32pt;
    }

    p {
      font-size: 14pt;
    }
  }
`;
