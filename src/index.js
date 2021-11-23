import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./utils/theme";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
