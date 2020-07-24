import { Button } from '@material-ui/core';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import wave from '../static/svg/plansWave.svg';

export default class Planos extends React.Component {
  render() {
    return (
      <Container>
        <Header background="#5c22d8" />
        <Head>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        </Head>

        <div className="content">
          <section>
            <div className="text">
              <h1>Planos na medida certa para seu negócio</h1>
              <h2>
                Encontre um plano ideal para seu modelo de negócio, com preços na medida certa,
                escolha webstock e comece a escalar até o topo.
              </h2>
              <Button style={{ marginTop: 16 }} color="secondary" variant="contained">
                Assine agora
              </Button>
            </div>
            <div className="image">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_egmSxc.json"
                speed="1"
                className="credit-card"
                loop
                autoplay
              ></lottie-player>
            </div>
          </section>
        </div>
        <img src={wave}></img>

        <div className="content">
          <section>
            <div className="plans">
              <div
                onClick={() => {
                  window.location.assign('http://app.webstock.com.br/planos');
                }}
                className="card"
              >
                <h1>Teste gratuíto</h1>
                <h2>Gestão de produtos, compras e vendas.</h2>
                <span>Período de 15 dias</span>

                <p>Apenas o usuário padrão</p>
                <p className="cut">Sem emissão fiscal</p>
                <p>Suporte comum</p>
              </div>

              <div
                onClick={() => {
                  window.location.assign('http://app.webstock.com.br/planos');
                }}
                className="card"
              >
                <h1>Plus</h1>
                <h2>Gestão de produtos, compras e vendas.</h2>
                <span>
                  <sup>R$</sup> 29,90 por mês
                </span>

                <p>2 funcionários</p>
                <p>Emissão de nota fiscal</p>
                <p>Suporte prioritário</p>
              </div>

              <div
                onClick={() => {
                  window.location.assign('http://app.webstock.com.br/planos');
                }}
                className="card"
              >
                <h1>Premium</h1>
                <h2>Gestão de produtos, compras e vendas.</h2>
                <span>
                  <sup>R$</sup> 59,90 por mês
                </span>

                <p>10 funcionários</p>
                <p>Emissão de nota fiscal</p>
                <p>Suporte prioritário</p>
              </div>
            </div>
          </section>
        </div>

        <img src={wave} style={{ transform: 'rotate(180deg) translateY(-20px)' }} alt="wave" />
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  .content:nth-child(2) {
    background: #5c22d8;
    section:nth-child(1) {
      padding: 64px 32px;
      display: flex;
      max-width: 1170px;
      color: rgba(255, 255, 255, 0.9);
      margin: auto;
      align-items: center;

      div.text {
        width: 70%;

        @media (max-width: 720px) {
          width: 100%;
        }
      }
      div.image {
        width: 30%;
        @media (max-width: 720px) {
          display: none;
        }
      }

      h1,
      h2 {
        margin: 0;
      }

      h1 {
        font-size: 36pt;
        text-transform: uppercase;
        margin-bottom: 16px;
      }

      h2 {
        font-weight: normal;
      }
    }
  }

  .content:nth-child(4) {
    section {
      max-width: 1170px;
      margin: auto;

      div.plans {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        .card {
          border-radius: 8px;
          padding: 36px;
          margin: 32px;
          background: #f5f5f5;
          width: 250px;
          height: 300px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          cursor: pointer;

          .cut {
            text-decoration: line-through;
            color: rgba(0, 0, 0, 0.3);
          }

          h1 {
            margin-top: 0;
          }

          h2 {
            font-size: 12pt;
            font-weight: normal;
          }

          span {
            font-size: 14pt;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
