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
  Divider
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { AppContext } from '../../context/appContext';
import { LOCALES } from '../../const';

const NavigationSection = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, [dispatch]);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <ListItemButton
            mr={0}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemIcon>
              <ChevronLeftIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* <Link to="settings" style={{ textDecoration: 'none', color: 'grey' }}> */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <FormattedMessage id="settings">
                {(primary) => <ListItemText primary={primary} />}
              </FormattedMessage>
            </ListItemButton>
          </ListItem>
        {/* </Link> */}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton
            disabled={state.locale === LOCALES.ENGLISH}
            sx={{ color: 'grey' }}
            onClick={() => setLanguage(LOCALES.ENGLISH)}
          >
            <ListItemIcon>
              <LanguageIcon
                visibility={
                  state.locale === LOCALES.ENGLISH ? 'hidden' : 'visible'
                }
              />
            </ListItemIcon>
            <ListItemText primary="English" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            disabled={state.locale === LOCALES.UKRAINIAN}
            sx={{ color: 'grey' }}
            onClick={() => setLanguage(LOCALES.UKRAINIAN)}
          >
            <ListItemIcon>
              <LanguageIcon
                visibility={
                  state.locale === LOCALES.UKRAINIAN ? 'hidden' : 'visible'
                }
              />
            </ListItemIcon>
            <ListItemText primary="Українська" />
          </ListItemButton>
        </ListItem>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <FormattedMessage id="home" />
            </Link>
          </Typography>
          <Box pr={2} sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              sx={{ color: 'white', fontSize: '12px', display: 'block' }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              English
            </Button>
            <Button
              disabled={state.locale === LOCALES.UKRAINIAN}
              sx={{ color: 'white', fontSize: '12px', display: 'block' }}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
            >
              Українська
            </Button>
          </Box>
          {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link
                to="settings"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <FormattedMessage id="settings" />
              </Link>
            </Button>
          </Box> */}
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

export default NavigationSection;
