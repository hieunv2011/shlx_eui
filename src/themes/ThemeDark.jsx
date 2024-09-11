import React from 'react';
import '@elastic/eui/dist/eui_theme_dark.css'; // Import CSS cho dark theme
import { EuiProvider } from '@elastic/eui';

const ThemeDark = ({ children }) => (
  <EuiProvider colorMode="dark">
    {children}
  </EuiProvider>
);

export default ThemeDark;
