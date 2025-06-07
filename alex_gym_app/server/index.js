// server/index.js (Updated for ES Module syntax)

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

// 1. Define your GraphQL Schema (Type Definitions)
const typeDefs = gql`
  type User {
    id: ID!
    name: String
    phonenumber: String
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, phonenumber: String!, email: String!): User
    updateUser(id: ID!, name: String, phonenumber: String, email: String): User
    deleteUser(id: ID!): Boolean
  }
`;

// 2. Your "Data Table" (in-memory array)
let users = [
  {
    id: "1",
    name: "Jonas",
    phonenumber: "+370 612 34567",
    email: "jonasjonas@gmail.com",
  },
];

let nextId = 4;

// 3. Define Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => users.find((user) => user.id === id),
  },
  Mutation: {
    addUser: (parent, { name, phonenumber, email }) => {
      const newUser = { id: String(nextId++), name, phonenumber, email };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, { id, name, phonenumber, email }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) return null;

      const updatedUser = { ...users[userIndex], name, phonenumber, email };
      users[userIndex] = updatedUser;
      return updatedUser;
    },
    deleteUser: (parent, { id }) => {
      const initialLength = users.length;
      users = users.filter((user) => user.id !== id);
      return users.length < initialLength;
    },
  },
};

// 4. Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 5. Start the server using startStandaloneServer
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`${url}`);
});
