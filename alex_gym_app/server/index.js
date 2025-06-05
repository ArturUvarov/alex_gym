// server/index.js (Updated for ES Module syntax)

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

// 1. Define your GraphQL Schema (Type Definitions)
const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
    year: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, year: Int!): Book
    updateBook(id: ID!, title: String, author: String, year: Int): Book
    deleteBook(id: ID!): Boolean
  }
`;

// 2. Your "Data Table" (in-memory array)
let books = [
  {
    id: "1",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
  },
  { id: "2", title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: "3", title: "1984", author: "George Orwell", year: 1949 },
];

let nextId = 4;

// 3. Define Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (parent, { id }) => books.find((book) => book.id === id),
  },
  Mutation: {
    addBook: (parent, { title, author, year }) => {
      const newBook = { id: String(nextId++), title, author, year };
      books.push(newBook);
      return newBook;
    },
    updateBook: (parent, { id, title, author, year }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) return null;

      const updatedBook = { ...books[bookIndex], title, author, year };
      books[bookIndex] = updatedBook;
      return updatedBook;
    },
    deleteBook: (parent, { id }) => {
      const initialLength = books.length;
      books = books.filter((book) => book.id !== id);
      return books.length < initialLength;
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
  console.log(`🚀 Server ready at ${url}`);
});
