import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderComponent>
        <div style={{ background: this.props.background }} className="header">
          <div>
            <Menu color="secondary" />
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

  .mobile-hidden {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .desktop-hidden {
    display: none;
    @media (max-width: 1023px) {
      display: block;
    }
  }
`;
