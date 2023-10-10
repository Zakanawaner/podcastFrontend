//Material
import { Box, Avatar } from '@mui/material';
//Staic
import logo from '../../static/images/Mario.jpeg';

const StyleBox = {
    aspectRatio: 1,
    marginInline: 'auto',
    opacity: 0.7,
    display: 'flex',
    justifyContent: 'center',
    padding: "5%",
};
const StyleAvatar = {
    height: '60%',
    width: '60%',
}

function AboutAuthor() {
    return (
        <Box sx={StyleBox}>
            <Avatar alt='logo' src={logo} sx={StyleAvatar}/>    
        </Box>
    );
}

export default AboutAuthor;