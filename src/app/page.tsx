'use client';
import Image from 'next/image';
import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { Whatsapp } from '@/features/Whatsapp';

import { PersistGate } from 'redux-persist/integration/react';
export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <Box>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Nonô Doces
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
          <Box mt={2}>
            <Whatsapp />
          </Box>
        </Box>
      </PersistGate>
    </Provider>
  );
}
