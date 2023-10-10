//Material
import { Box, Link } from '@mui/material';
//Responsive
import { useMediaQuery } from 'react-responsive';
//Components
import SectionTitle from '../SectionTitle';
import SectionText from '../SectionText';
import AboutAuthor from './AboutAuthor';

const StyleSection = {
    width: 1,
    height: '90vh',
    backgroundColor: 'secondary.main',
    display: 'flex',
    flexDirection: 'column', 
    '@media screen and (max-width: 750px)': {
        height: 'auto',
    },
};
const StyleContent = {
    width: 1,
    height: 'auto',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
};
const StyleText = {
    fontWeight: 200,
    fontSize: '1rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: 'text.ivoox',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: "10%",
    paddingTop: '0%',
    paddingBottom: '0%'
}

function About() {
    const wm300 = useMediaQuery({ minWidth: 300, minHeight: 300 })
    const wl300 = useMediaQuery({ maxWidth: 300 })
    const wm400 = useMediaQuery({ minHeight: 400 })
    const goToNovel = () => {
        window.open('https://amzn.eu/d/48seCih')
    }
    return (
        <Box id='sobremi'
            sx={StyleSection}>
            <SectionTitle section={'Sobre Mi'} primaryStyle={false}/>
            <Box sx={StyleContent}>
                {wm300 && <SectionText url={'about-text/1'}/>}
                {wl300 && <SectionText url={'about-text/3'}/>}
                {wm300 && <SectionText url={'about-text/2'}/>}
                {wl300 && <SectionText url={'about-text/4'}/>}
                <Link 
                    variant='overline' 
                    underline='none'
                    onClick={goToNovel}
                    sx={StyleText}>Al otro lado de la esfera
                </Link>
                {wm400 && <AboutAuthor/>}
            </Box>
        </Box>
    );
  }
  
  export default About;