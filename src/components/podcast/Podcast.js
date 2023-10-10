//Material
import { Box, Link } from '@mui/material';
//Responsive
import { useMediaQuery } from 'react-responsive';
//Components
import SectionText from '../SectionText';

const StyleSection = {
    width: 1,
    height: '85vh',
    backgroundColor: 'secondary.main',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '@media screen and (max-width: 350px)': {
        height: '89vh',
    },
    '@media screen and (max-height: 1000px)': {
        height: '83vh',
    },
};
const StyleContent = {
    width: 1,
    height: '100%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
};
const StyleFrame = {
    width: '40%',
    aspectRatio: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media screen and (max-width: 1300px)': {
        width: '60%',
        aspectRatio: 2,
    },
    '@media screen and (max-height: 1000px)': {
        width: '60%',
        aspectRatio: 2,
    }, 
}
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
    padding: "10%"
}


function Podcast() {
    const goToIvoox = () => {
        window.open('https://go.ivoox.com/sq/2107328')
    }
    const wm750 = useMediaQuery({ minWidth: 750, minHeight: 750 })
    const wm300 = useMediaQuery({ minWidth: 300, minHeight: 300 })
    const wl750 = useMediaQuery({ maxWidth: 750 })
    const wl300 = useMediaQuery({ maxWidth: 300 })

    return (
        <Box id='podcast' sx={StyleSection}>
            <Box sx={StyleContent}>
                {wm300 && <SectionText url={'podcast-text/1'}/>}
                {wl300 && <SectionText url={'podcast-text/3'}/>}
                {wm750 && <Box sx={StyleFrame}>   
                        <iframe 
                            src="https://www.ivoox.com/player_es_podcast_2107328_zp_1.html?c1=838383" 
                            title='Ivoox'
                            width="100%" 
                            height='100%'
                            frameBorder="0" 
                            allowFullScreen="" 
                            loading="lazy"
                        />
                    </Box>}
                {wm300 && <SectionText url={'podcast-text/2'}/>}
                {wl300 && <SectionText url={'podcast-text/4'}/>}
                {wl750 && <Link 
                    variant='overline' 
                    underline='none'
                    onClick={goToIvoox}
                    sx={StyleText}>Ir a Ivoox
                </Link>}
            </Box>
         </Box>
    );
  }
  
  export default Podcast;