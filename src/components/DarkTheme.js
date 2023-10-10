import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#333',
      },
      secondary: {
        main: '#444',
        highlight: '#838383'
      },
      background: {
        default: '#333',
      },
      text: {
        title: '#999',
        text: '#aaa',
        primary: '#ddd',
        secondary: '#bbb',
        highlight: '#fff',
        ivoox: '#f04a00',
        amazon: '#e7b600'
      },
    },
  });

export default darkTheme;