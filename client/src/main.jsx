import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="jade" grayColor="gray" radius="large" scaling="110%">
      <App />
    </Theme>
  </React.StrictMode>,
)
