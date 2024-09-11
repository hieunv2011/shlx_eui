import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css'; // Import CSS cho light theme
import { EuiProvider } from '@elastic/eui';

const ThemeLight = ({ children }) => (
  <EuiProvider colorMode="light">
    {children}
  </EuiProvider>
);

export default ThemeLight;
