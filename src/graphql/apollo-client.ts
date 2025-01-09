import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://store.untitled-ui-api.ru/graphql',
  cache: new InMemoryCache(),
});

export default client;
