//Material
import { Box } from '@mui/material';
//Components
import SectionTitle from '../SectionTitle';
import TaleList from './TaleList';

const StyleSection = {
    width: 1,
    height: '95vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media screen and (max-width: 750px)': {
        height: 'auto',
    },

};
const StyleContent = {
    width: 1,
    height: '70%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};
const StyleList = {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflowY: 'auto',
    '@media screen and (max-width: 750px)': {
        width: '80%',
        justifyContent: 'center',
    },
}

function Tales() {
    return (
        <Box id='relatos'
            sx={StyleSection}>
            <SectionTitle section={'Relatos'} primaryStyle={false}/>
            <Box sx={StyleContent}>
                <Box sx={StyleList}>
                    <TaleList />
                </Box>
            </Box>
        </Box>
    );
  }
  
  export default Tales;