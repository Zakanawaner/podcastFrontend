//Material
import { Box, Link } from "@mui/material";

const StyleLink = {
    height: '90%',
    width: '30%',
    aspectRatio: 1,
    marginBlock: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
        color: 'white'
    }
}
const StyleText = {
    fontWeight: 200,
    fontSize: '1rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: 'text.primary',
    '@media screen and (max-width: 350px)': {
      fontSize: '.7rem',
    },
}

function HeaderLink({text}) {
    const scrollToSection = (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    return (
        <Box sx={StyleLink}>
            <Link 
                variant='overline' 
                underline='none'
                href={'#' + text.toLowerCase().split(" ").join("")}
                onClick={scrollToSection}
                sx={StyleText}>{text}</Link>  
        </Box> 
    );
}

export default HeaderLink

