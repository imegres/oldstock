import React from 'react';
import styled from 'styled-components';
import { Instagram, Facebook } from '@material-ui/icons';

export default class footerComponent extends React.Component {
  render() {
    return (
      <Footer
        style={{
          backgroundColor: '#5c22d8',
          color: '#fff',
        }}
      >
        <FooterContainer style={{ marginTop: 60, marginBottom: 60 }}>
          <FooterRow>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <h2 style={{ color: '#fff' }}>Precisa de ajuda?</h2>
              <p style={{ margin: 0 }}>
                Inicie uma conversa conosco <b style={{ color: '##fff', cursor: 'pointer' }}>FAQ</b>{' '}
                ou envie um email para{' '}
                <b style={{ color: '#ff5cf0', cursor: 'pointer' }}>webstock@webstock.com.br</b>,
                responderemos assim que possível!
              </p>
            </div>
          </FooterRow>
          {/**
          <FooterRow>
            <div>
              <h5 style={{ textAlign: 'center', color: '#fff' }}>Sobre nós</h5>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: 12, textAlign: 'center' }}>
                <li>Sobre 1</li>
                <li>Sobre 1</li>
                <li>Sobre 1</li>
              </ul>
            </div>
            <div>
              <h5 style={{ textAlign: 'center', color: '#fff' }}>Perguntas frequentes</h5>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: 12, textAlign: 'center' }}>
                <li>Pergunta 1</li>
                <li>Pergunta 1</li>
                <li>Pergunta 1</li>
                <li>Pergunta 1</li>
                <li>Pergunta 1</li>
              </ul>
            </div>
            <div>
              <h5 style={{ textAlign: 'center', color: '#fff' }}>Perguntas frequentes</h5>
            </div>
            <div>
              <h5 style={{ textAlign: 'center', color: '#fff' }}>Conteúdos gratuítos</h5>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: 12, textAlign: 'center' }}>
                <li>Conteúdo 1</li>
                <li>Conteúdo 1</li>
                <li>Conteúdo 1</li>
                <li>Conteúdo 1</li>
                <li>Conteúdo 1</li>
              </ul>
            </div>
          </FooterRow>
           */}
          <hr style={{ width: '90%', border: `.5px solid ${'#ff5cf0'}` }}></hr>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ marginTop: 20, fontSize: 12, textAlign: 'center' }}>
              Copyright © 2020 Webstock. Todos os direitos reservados.
            </div>
            <div style={{ fontSize: 12, textAlign: 'center' }}>
              Os ícones contidos nesse site foram fornecidos por{' '}
              <a
                style={{ textDecoration: 'none', color: '#fff' }}
                target="_blank"
                href="https://www.flaticon.com/"
                rel="noopener"
              >
                Flaticon
              </a>
              .
            </div>
            <div>
              <Facebook style={{ fontSize: 40, cursor: 'pointer', margin: 10, marginBottom: 0 }} />
              <Instagram style={{ fontSize: 40, cursor: 'pointer', margin: 10, marginBottom: 0 }} />
            </div>
          </div>
        </FooterContainer>
      </Footer>
    );
  }
}

const Footer = styled.div`
  display: flex;
  bottom: 0px;
  justify-content: center;
  width: 100%;
  @media (max-width: 425px) {
    padding: 0;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  flex-direction: column;
  max-width: 1170px;
  @media (max-width: 1170px) {
    max-width: 100%;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
  @media (max-width: 1170px) {
    flex-direction: column;
  }
`;
