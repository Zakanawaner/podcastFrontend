//Material
import { Avatar, Box } from '@mui/material';
//Static
import logo from '../../static/images/logo.png';

const Style = {
    height: '80%',
    width: 'auto',
    aspectRatio: 1,
    marginBlock: 'auto',
    opacity: 0.7,
    '@media screen and (max-width: 350px)': {
      height: '90%',
    },
}

function HeaderLogo() {
    return (
        <Box sx={Style}>
            <Avatar alt='logo' src={logo}
                    sx={{
                        height: '100%',
                        width: '100%',
                }}/>    
        </Box> 
    );
  }
  
  export default HeaderLogo;