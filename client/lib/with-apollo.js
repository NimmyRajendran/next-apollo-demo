import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
      uri: process.env.API || 'http://localhost:5002/graphql',
      fetch,
  }),
  cache: new InMemoryCache(),
});


export default client

