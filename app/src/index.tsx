import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { graphQlSubUrl, graphQlUri } from './utils/constants';
import { AuthProvider, UserData } from './context/auth-context';
import ChatProvider from './components/providers/ChatProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/tanstack-query';
import { getMainDefinition } from '@apollo/client/utilities';

// Apollo Store -
const httpLink = createHttpLink({
  uri: graphQlUri,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: graphQlSubUrl,
  })
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const stringifiedUser = localStorage.getItem('talent-outsource:user');
  let token = '';
  if (stringifiedUser) {
    const userData: UserData = JSON.parse(stringifiedUser);
    token = userData?.tokens?.access?.token;
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <QueryClientProvider client={queryClient}>
            <ChatProvider>
              <App />
            </ChatProvider>
          </QueryClientProvider>
        </ApolloProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
