import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import { act } from "react";

// 1. Define your GraphQL Schema (Type Definitions)
const typeDefs = gql`
  type User {
    id: ID!
    name: String
    phonenumber: String
    email: String
  }

  type Schedule {
    id: ID!
    day: String
    time: String
    activity: String
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
    addSchedule(day: String!, time: String!, activity: String!): Schedule
    updateSchedule(
      id: ID!
      day: String
      time: String
      activity: String
    ): Schedule
    deleteSchedule(id: ID!): Boolean
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

let schedules = [
  {
    id: "1",
    day: "Monday",
    time: "08:00",
    activity: "Yoga",
  },
  {
    id: "2",
    day: "Tuesday",
    time: "10:00",
    activity: "Pilates",
  },
];

let nextId = 4;

// 3. Define Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => users.find((user) => user.id === id),
    schedules: () => schedules,
    schedule: (parent, { id }) =>
      schedules.find((schedule) => schedule.id === id),
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
    addSchedule: (parent, { day, time, activity }) => {
      const newSchedule = { id: String(nextId++), day, time, activity };
      schedules.push(newSchedule);
      return newSchedule;
    },
    updateSchedule: (parent, { id, day, time, activity }) => {
      const scheduleIndex = schedules.findIndex(
        (schedule) => schedule.id === id
      );
      if (scheduleIndex === -1) return null;

      const updatedSchedule = {
        ...schedules[scheduleIndex],
        day,
        time,
        activity,
      };
      schedules[scheduleIndex] = updatedSchedule;
      return updatedSchedule;
    },
    deleteSchedule: (parent, { id }) => {
      const initialLength = schedules.length;
      schedules = schedules.filter((schedule) => schedule.id !== id);
      return schedules.length < initialLength;
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
