import { createTheme } from '@mui/material';
import './index.css';

// Definindo o tema global com as cores fornecidas
const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#0D0D0D',  // Cor principal
      contrastText: '#F2F2F2',  // Cor de contraste, usada para o texto sobre a cor principal
    },
    secondary: {
      main: '#A6783F',  // Cor secundária
      contrastText: '#F2F2F2',  // Cor de contraste para o texto na cor secundária
    },
    background: {
      default: '#F2F2F2',  // Cor de fundo principal
      paper: '#F2E399',    // Cor de fundo para componentes como Paper
    },
    text: {
      primary: '#0D0D0D',  // Cor de texto primário (geral)
      secondary: '#A6783F', // Cor de texto secundário
    },
    warning: {
      main: '#F2E205',  // Cor de alerta (amarelo)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#0D0D0D',
    },
    body1: {
      fontSize: '1rem',
      color: '#0D0D0D',
    },
  },
  spacing: 8,  // Define o espaçamento padrão como 8px
});

export default globalTheme;