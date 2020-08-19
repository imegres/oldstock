import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Router from 'next/router';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderComponent>
        <div className="header">
          <nav>
            <ul>
              <li>
                <a
                  onClick={() => {
                    window.location.assign('#inicio');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    window.location.assign('#funcionalidades');
                  }}
                >
                  Funcionalidades
                </a>
              </li>
            </ul>
          </nav>
          <div style={{ margin: 'auto 0' }}>
            <Button
              onClick={() => {
                window.location.assign('http://app.webstock.com.br');
              }}
              color="primary"
              variant="contained"
            >
              Acessar
            </Button>
          </div>
        </div>
      </HeaderComponent>
    );
  }
}

const HeaderComponent = styled.header`
  width: 100%;

  .header {
    z-index: 3;
    display: flex;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff;
    padding: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  }

  .header nav ul {
    display: flex;

    li {
      margin-right: 16px;
      list-style-type: none;
      cursor: pointer;
    }
  }
`;
