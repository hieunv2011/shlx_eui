import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EuiProvider, euiStylisPrefixer } from '@elastic/eui';
import createCache from '@emotion/cache';
const queryClient = new QueryClient();
const cache = createCache({
  key: 'codesandbox',
  stylisPlugins: [euiStylisPrefixer],
  container: document.querySelector('meta[name="emotion-styles"]'),
});
cache.compat = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EuiProvider colorMode="light">
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </EuiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();