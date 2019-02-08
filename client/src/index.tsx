// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import WMuiThemeProvider from './WMuiThemeProvider';

ReactDOM.render(
  <BrowserRouter>
    <WMuiThemeProvider>
      <App />
    </WMuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
