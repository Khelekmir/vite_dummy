import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './ContextStore';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Box, Typography } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2'
    },
    secondary: {
      light: '#ffd54f',
      main: '#ffca28',
      dark: '#ffa000'
    },
  },
  typography: {
    fontFamily: 'Times New Roman, Times, serif',
  },
  spacing: 6
});

function Main() {
  return (
    <Box>
      <Typography variant="h3" fontWeight="bold"
        sx={{
          WebkitTextStroke: '0.5px white',
          textStroke: '1px white',
          textShadow: '2px 2px 2px black'
        }}>
        Statement
      </Typography>
      <Typography variant="body1"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid black',
          marginLeft: 2,
          marginRight: 2
        }}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel sed neque nec pretium risus elit. Cras justo elit pellentesque conubia arcu sed class. Phasellus torquent congue et nisl; eleifend ex facilisi enim cursus. Praesent velit accumsan; non enim aliquam efficitur. Elit diam mollis consequat platea interdum nullam.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold"
            sx={{
              WebkitTextStroke: '0.5px white',
              textStroke: '1px white',
              textShadow: '2px 2px 2px black'
            }}>
            Statement
          </Typography>
          <Typography variant="body1"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid black',
              marginLeft: 2,
              marginRight: 2
            }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vel sed neque nec pretium risus elit. Cras justo elit pellentesque conubia arcu sed class. Phasellus torquent congue et nisl; eleifend ex facilisi enim cursus. Praesent velit accumsan; non enim aliquam efficitur. Elit diam mollis consequat platea interdum nullam.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold"
            sx={{
              WebkitTextStroke: '0.5px white',
              textStroke: '1px white',
              textShadow: '2px 2px 2px black'
            }}>
            Statement
          </Typography>
          <Typography variant="body1"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid black',
              marginLeft: 2,
              marginRight: 2
            }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vel sed neque nec pretium risus elit. Cras justo elit pellentesque conubia arcu sed class. Phasellus torquent congue et nisl; eleifend ex facilisi enim cursus. Praesent velit accumsan; non enim aliquam efficitur. Elit diam mollis consequat platea interdum nullam.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" fontWeight="bold"
          sx={{
            WebkitTextStroke: '0.5px white',
            textStroke: '1px white',
            textShadow: '2px 2px 2px black'
          }}>
          Statement
        </Typography>
        <Typography variant="body1"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid black',
            marginLeft: 2,
            marginRight: 2
          }}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien convallis potenti pharetra rhoncus faucibus feugiat. Natoque parturient varius risus, porttitor libero urna. Vestibulum scelerisque class phasellus non convallis; tempor aenean gravida. Parturient erat porta platea cursus mi praesent litora posuere sed. Aptent justo habitant libero a rutrum venenatis. Praesent luctus aenean placerat penatibus quisque.

          Magnis primis nullam per, suspendisse hac vestibulum. Fringilla iaculis id sodales bibendum massa. Tristique blandit mus metus elit nisi rhoncus mauris proin? Sem elementum rutrum sapien pellentesque, ad dictum porta nibh habitant. Sociosqu natoque morbi maximus lacus scelerisque egestas natoque. Pretium aptent nulla nostra class; ultrices vel. Justo suscipit consequat senectus etiam dis platea. Ullamcorper tellus eget sagittis luctus elementum quisque ridiculus.
        </Typography>
      </Box>
    </Box>
  );
}
export default Main

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
)
