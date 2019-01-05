import React from 'react';
import { render } from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

 const client = new ApolloClient({
     uri: 'http://localhost:8080/graphql',
     credentials: 'include', // TODO: set to 'same-origin' when backend is on the same domain as frontend
     request: async (operation) => {
         operation.setContext({
             headers: {
                 authorization: `Bearer ${localStorage.getItem('token')}`
             }
         })
     }
 });

import { App } from './App';

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);

