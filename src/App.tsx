import React from 'react';
import './App.css';
import HomePage from './pages/home'
import DarkModeProvider from './components/DarkMode'
import Header from "./components/Header";
import GlobalStyles from '@mui/material/GlobalStyles';
import {RecordProvider} from './components/RecordProvider';
import WebSocketProvider from './components/WebSocketProvider';


function App() {
  return (
    <DarkModeProvider>
      <RecordProvider>
        <WebSocketProvider>
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
          <Header title="BigBlueButton Download tool" />
          <HomePage />
        </WebSocketProvider>
      </RecordProvider>
    </DarkModeProvider>
      )

}

export default App;
