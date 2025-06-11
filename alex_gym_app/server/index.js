import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

// GraphQL Schema
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
    schedules: [Schedule]
    schedule(id: ID!): Schedule
  }

  type Mutation {
    addUser(name: String!, phonenumber: String!, email: String!): User
    updateUser(id: ID!, name: String, phonenumber: String, email: String): User
    deleteUser(id: ID!): Boolean
  }
`;

// Data Table

let users = [
  {
    id: "1",
    name: "John Doe",
    phonenumber: "1234567890",
    email: "jonas.jonaitis@gmail.com",
  },
];

let nextId = 4;

// Resolvers
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
      const updatedUser = { ...users[userIndex] };
      if (name !== undefined) updatedUser.name = name;
      if (phonenumber !== undefined) updatedUser.phonenumber = phonenumber;
      if (email !== undefined) updatedUser.email = email;
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

// Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`${url}`);
});
