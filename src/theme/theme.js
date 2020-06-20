import { createMuiTheme } from '@material-ui/core/styles';

//Outras cores
//Material table icons: #7179ad

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#0e1c85',
      main: '#1428bf',
      light: '#4353cb',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#b240a8',
      main: '#ff5cf0',
      light: '#ff7cf3',
      contrastText: '#fff',
    },
  },
});

export default theme;
