import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import NightModeButton from './components/NightModeButton';
import Podcast from './components/podcast/Podcast';
import Tales from './components/tales/Tales';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import lightTheme from './components/LightTheme';
import darkTheme from './components/DarkTheme';
import './App.css';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
      setIsDarkMode(savedTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('themePreference', isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <div className='App'>
          <Header/>
          <Podcast/>
          <Tales/>
          <About/>
          <Footer/>
          <NightModeButton functionToExecute={toggleDarkMode}/>
          <ScrollToTopButton />
        </div>
    </ThemeProvider>
    
  );
}

export default App;