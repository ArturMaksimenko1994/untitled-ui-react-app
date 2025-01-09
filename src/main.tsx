import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { ApolloProvider } from '@apollo/client';

import client from './graphql/apollo-client.ts';
import App from './components/App/App.tsx';

import './assets/styles/app.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
