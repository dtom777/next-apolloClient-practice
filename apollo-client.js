import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // GraphQLサーバーのuri
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default client;
