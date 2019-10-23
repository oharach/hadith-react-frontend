import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

import './style.css';

const GRAPHQL_BASE_URL = 'http://localhost:3000/admin/api';

const httpLink = new HttpLink({
  uri: GRAPHQL_BASE_URL,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
  }
  if (networkError) {
    // do something with network error
    console.log(networkError);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});


ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
