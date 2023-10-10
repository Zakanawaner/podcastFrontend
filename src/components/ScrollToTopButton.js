//Readt
import React, { useState, useEffect } from 'react';
//Material
import { Fab, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//Utils
import {scrollToTop} from './Utils';
//Styles
import { BoxFabToTop } from './Styles';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Box sx={BoxFabToTop}>
      {isVisible && (
        <Fab color="primary" aria-label="scroll-to-top" onClick={scrollToTop}
        sx={{
          opacity: isVisible ? 0.7 : 0,
          transition: 'opacity 0.3s',
          '&:hover': {
              opacity: 1,
          }
        }}>
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
}

export default ScrollToTopButton;