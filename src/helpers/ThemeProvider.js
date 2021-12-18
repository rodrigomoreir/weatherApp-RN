import React from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';

import { defaultTheme } from '../global/styles/theme';


const ThemeProvider = ({ children }) => (
  <DefaultThemeProvider theme={defaultTheme}>{children}</DefaultThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeProvider;
