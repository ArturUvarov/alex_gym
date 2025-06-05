// src/components/BookList.jsx
import React, { useState } from "react"; // Import useState for local form state
import { gql, useQuery, useMutation } from "@apollo/client";

// Define your GraphQL Queries and Mutations using gql
// These MUST match the schema you defined in your server/index.js
const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      year
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $year: Int!) {
    addBook(title: $title, author: $author, year: $year) {
      id # You can request specific fields back after a mutation
      title
      author
    }
  }
`;

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id)
  }
`;

function BookList() {
  // --- Use Query to Fetch Data ---
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);

  // --- Use Mutations to Modify Data ---
  const [addBook] = useMutation(ADD_BOOK, {
    // When a book is added, tell Apollo Client to refetch the GET_BOOKS query
    // so the UI automatically updates with the new book.
    onCompleted: () => refetch(),
  });

  const [deleteBook] = useMutation(DELETE_BOOK, {
    onCompleted: () => refetch(), // Refetch after deleting
  });

  // --- Local state for a simple "add book" form ---
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookYear, setNewBookYear] = useState("");

  // --- Event Handlers ---
  const handleAddBook = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Execute the mutation with variables from form state
      await addBook({
        variables: {
          title: newBookTitle,
          author: newBookAuthor,
          year: parseInt(newBookYear, 10), // Ensure year is an integer
        },
      });
      // Clear the form after successful submission
      setNewBookTitle("");
      setNewBookAuthor("");
      setNewBookYear("");
      console.log("Book added successfully!");
    } catch (e) {
      console.error("Error adding book:", e.message);
      // You could also set an error state here to display to the user
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook({ variables: { id } });
      console.log(`Book with ID ${id} deleted!`);
    } catch (e) {
      console.error("Error deleting book:", e.message);
    }
  };

  // --- Render Logic (UI) ---
  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books: {error.message}</p>;

  return (
    <div>
      <h2>My Books Data</h2>

      {/* Add Book Form */}
      <h3>Add New Book</h3>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Title"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Author"
          value={newBookAuthor}
          onChange={(e) => setNewBookAuthor(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Year"
          value={newBookYear}
          onChange={(e) => setNewBookYear(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Book</button>
      </form>

      {/* List of Books */}
      <h3>Existing Books</h3>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
            <button
              onClick={() => handleDeleteBook(book.id)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
