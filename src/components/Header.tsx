import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import * as DarkMode from '../contexts/DarkMode'
import Brightness7Icon from '@mui/icons-material/Brightness7';


type header_props = {
  title: string;
};

function ToggleDarkMode() {
  const {is_dark_mode,setDarkMode} = React.useContext(DarkMode.DarkModeContext) as DarkMode.DarkModeContextType;
  return (
  <Box
    >
      <IconButton sx={{ ml: 1 }} onClick={()=>setDarkMode(!is_dark_mode)} color="inherit">
        {is_dark_mode? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );


}
function Header(prop: header_props) {
  return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {prop.title}
          </Typography>
          <ToggleDarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header
