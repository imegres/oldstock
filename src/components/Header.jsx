import React from 'react';
import styled from 'styled-components';
import menu from '../static/svg/menu.svg';
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderComponent>
        <div className="header">
          <div>
            <Menu color="secondary" />
          </div>
          <div>
            <Button variant="contained" color="secondary">
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
  position: fixed;
  top: 0;
  z-index: 1;

  .header {
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 72px;
    box-shadow: 0 0 14px 0 rgba(53, 64, 82, 0.15);
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
