import React from 'react';
import './App.css';
import HomePage from './pages/home'
import DarkModeProvider from './components/DarkMode'
import Header from "./components/Header";
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import {RecordProvider} from './components/RecordProvider';
import WebSocketProvider from './components/WebSocketProvider';


function App() {
  return (
    <DarkModeProvider>
      <RecordProvider>
        <WebSocketProvider>
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
          <Header title="BigBlueButton Record download tool" />
          <HomePage />
          <Container
          maxWidth="sm"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              position: "fixed",
              bottom:0,
              py: [3, 3],bgcolor: 'primary.dark',backgroundColor:'primary.main'
            }}

          >
          </Container>
        </WebSocketProvider>
      </RecordProvider>
    </DarkModeProvider>
      )

}

export default App;
