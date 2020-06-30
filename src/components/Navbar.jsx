import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export default class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <Container>
        <List>
          <ListItem button>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Funcionalidades" />
          </ListItem>
        </List>
      </Container>
    );
  }
}

const Container = styled.div`
  padding-top: 70px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  height: 100vh;
  width: 300px;

  background: #fff;
  opacity: 0.9;
`;
