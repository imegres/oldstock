import { Slide, Snackbar } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import materialUiTheme from '../theme/theme';
export default class Webstock extends App {
  render() {
    const handleClose = (e, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      this.setState({ snackbarIsOpen: false });
    };

    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <style>
            {
              '\
::-webkit-scrollbar {\
  width: 4px;\
  position: float;\
}\
::-webkit-scrollbar-track {\
  background: none;\
  position: float;\
}\
::-webkit-scrollbar-thumb {\
  background: #888;\
  position: float;\
}\
::-webkit-scrollbar-thumb:hover {\
  background: #555;\
  position: float;\
}\
'
            }
          </style>
        </Head>
        <ThemeProvider theme={materialUiTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    );
  }
}
