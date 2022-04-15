import {
  Box,
  AppBar,
  IconButton,
  Menu as MenuIcon,
  Typography,
  Button,
  Toolbar,
} from '@material-ui/core';
import { Router } from 'react-router-dom';

import Dashboard from './components/Dashboard';

export default function ButtonAppBar() {
  return (

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <div style={{padding: '5%'}}>
          <Dashboard />
        </div>
      </Box>
  );
}