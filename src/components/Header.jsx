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
        <div style={{ background: this.props.background }} className="header">
          <div>
            <Menu className="nav-button" color="secondary" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a
                  onClick={() => {
                    Router.push({ pathname: '/' });
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    Router.push({ pathname: '/funcionalidades' });
                  }}
                >
                  Funcionalidades
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button
              onClick={() => {
                window.location.assign('http://app.webstock.com.br/');
              }}
              variant="contained"
              color="secondary"
            >
              ACESSAR
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
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 72px;
  }

  .nav-button {
    @media (min-width: 720px) {
      display: none;
    }
  }

  .menu {
    width: 1170px;
    display: none;

    ul {
      display: flex;
      li {
        list-style-type: none;
        margin-right: 36px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;

        a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          user-select: none;

          :hover {
            color: rgba(255, 255, 255, 1);
            transition: 0.3s;
          }
        }
      }
    }

    @media (min-width: 720px) {
      display: flex;
    }
  }

  .mobile-hidden {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
