import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import { RootStoreProvider } from './stores/RootStoreProvider';
import { ThemeStyleProvider } from './stores/StyleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootStoreProvider>
      <ThemeStyleProvider>
        <App/>
      </ThemeStyleProvider>
    </RootStoreProvider>
  </React.StrictMode>
);