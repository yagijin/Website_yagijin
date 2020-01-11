import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/newcolortheme';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
