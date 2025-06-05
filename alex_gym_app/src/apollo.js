// src/apollo.js
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Replace with your GraphQL server URI
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // e.g., 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
