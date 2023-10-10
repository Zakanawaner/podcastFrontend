//Material
import Box from '@mui/material/Box';
//Components
import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';

const Style1 = {
    width: 1,
    height: '10vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    justifyContent: 'center',
    '@media screen and (max-width: 350px)': {
        height: '6vh',
    },
}
const Style2 = {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    '@media screen and (max-width: 1300px)': {
      width: '60%',
    },
    '@media screen and (max-width: 600px)': {
      width: '90%',
    },
}

function Header() {
    return (
        <Box sx={Style1}>
            <Box sx={Style2}>
                <HeaderLink text={'Relatos'} />
                <HeaderLogo />
                <HeaderLink text={'Sobre Mi'} />
            </Box>
        </Box>
    );
  }
  
  export default Header;