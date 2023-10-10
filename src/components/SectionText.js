//Material
import { Box, Typography } from '@mui/material';
//Hooks
import {useGetApiString} from './Hooks';

const StyleText = {
  fontWeight: 200,
  fontSize: '1rem',
  lineHeight: 2,
  letterSpacing: '0.08333em',
  textTransform: 'none',
  color: 'text.highlight',
};
const StyleBox = {
  width: '40%',
  marginBottom: '2%',
  marginInline: 'auto',
  padding: '1%',
  '@media screen and (max-width: 1300px)': {
    width: '60%',
  },
  '@media screen and (max-width: 600px)': {
    width: '80%',
  },
  '@media screen and (max-height: 1000px)': {
    width: '60%',
  },  
  '@media screen and (max-height: 750px)': {
    width: '80%',
  },  

}

function SectionText({url}) {
    const { data, loading, error } = useGetApiString(url);
    return (
        <Box sx={StyleBox}>
            {loading ? (
              <Typography variant='overline' sx={StyleText}>Cargando...</Typography>  
            ) : error ? (
              <Typography variant='overline' sx={StyleText}>{error.message}</Typography>
            ) : data ? (
              <Typography variant='overline' sx={StyleText}>{data}</Typography>
            ) : (
              <Typography variant='overline' sx={StyleText}>No data available.</Typography> 
            )}
        </Box>
    );
}

export default SectionText;