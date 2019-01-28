import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import StyledApp from './StyledApp';
import themes from './settings/themes';
import PublicRoutes from './router';

const App = () => (
  <div className="App">
    <ThemeProvider theme={themes.themeDefault}>
      <StyledApp>
        <PublicRoutes />
      </StyledApp>
    </ThemeProvider>
  </div>
);

export default App;