import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabMenus from './TabMenus.js';

export default function MainHeader() {
  
    return (
        <AppBar position="relative">
          <Toolbar>
            <TabMenus />
            <Typography variant="h5" color="inherit" noWrap>
              　Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }