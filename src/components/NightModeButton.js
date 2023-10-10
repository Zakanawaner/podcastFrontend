//Material
import { Fab, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
//Styles
import { BoxFabTheme } from './Styles';

function NightModeButton({ functionToExecute }) {
  return (
      <Box sx={BoxFabTheme}>
          <Fab color="primary" onClick={functionToExecute}
          sx={{
            opacity: 0.7,
            transition: 'opacity 0.3s',
            '&:hover': {
                opacity: 0.5,
            }
          }}>
            <Brightness4Icon />
          </Fab>
      </Box>
  );
}

export default NightModeButton;