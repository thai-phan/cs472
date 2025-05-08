import React, {useContext, useEffect, useState} from 'react'
import './App.css'
import Book from "./Book.jsx";
import BookList from "./BookList.jsx";
import AddForm from "./AddForm.jsx";
import EditForm from "./EditForm.jsx";


export const BookContext = React.createContext(undefined);

// The list of books.
// Functions for adding, updating, and deleting books.
// Loading and error states for API calls.


function App() {
  const [books, setBooks] = useState(0)

  useEffect(() => {
    fetch("https://681cfa43f74de1d219ae6e44.mockapi.io/books")
        .then(response => response.json()).then(data => setBooks(data))
  }, []);

  const updateBook = () => {
    console.log("update Book")
  }

  const deleteBook = () => {
    console.log("delete Book")
  }


  return (
      <BookContext.Provider value={{ books, updateBook: updateBook, deleteBook: deleteBook}}>
        <div>
          Book management
        </div>
        <div>
          <BookList></BookList>
        </div>
        <div>
          <AddForm ></AddForm>
        </div>
          <EditForm ></EditForm>
        <div>
          Edit form
        </div>
      </BookContext.Provider>
  )
}

export default App
