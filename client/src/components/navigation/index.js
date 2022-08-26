import { useState, useContext, useCallback } from 'react';
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItem,
  ListItemText,
  Hidden,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { LOCALES } from '../../const';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="settings" style={{ textDecoration: 'none', color: 'grey' }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Movies recommendation
            </Link>
          </Typography>
          <Box pr={2}>
            {state.locale}
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              sx={{ color: 'white', fontSize: '12px' }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              English
            </Button>
            <Button
              disabled={state.locale === LOCALES.UKRAINIAN}
              sx={{ color: 'white', fontSize: '12px' }}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
            >
              Українська
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link
                to="settings"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Settings
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
