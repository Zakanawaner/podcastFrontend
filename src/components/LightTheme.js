import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#eee',
      },
      secondary: {
        main: '#ddd',
        highlight: '#fbfbfb'
      },
      background: {
        default: '#f5f5f5',
      },
      text: {
        title: '#444',
        text: '#333',
        primary: '#000',
        secondary: '#555',
        highlight: '#111',
        ivoox: '#f04a00',
        amazon: '#e7b600'
      },
    },
  });

export default lightTheme;