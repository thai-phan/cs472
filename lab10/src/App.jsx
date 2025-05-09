import React, {useEffect, useState} from 'react'
import './App.css'
import Book from "./Book.jsx";
import BookList from "./BookList.jsx";
import FormAdd from "./FormAdd.jsx";
import FormUpdate from "./FormUpdate.jsx";


export const BookContext = React.createContext({
  books: null,
  updateBook: null,
  addBook: null,
  deleteBook: null,
  curBook: null,
  setCurBook: null,
});

// The list of books.
// Functions for adding, updating, and deleting books.
// Loading and error states for API calls.


function App() {
  const [books, setBooks] = useState(0)

  const [curBook, setCurBook] = useState({})

  const loadData = () => {
    fetch("https://681cfa43f74de1d219ae6e44.mockapi.io/books")
        .then(response => response.json()).then(data => setBooks(data))
  }

  useEffect(() => {
    loadData()
  }, []);

  const updateBook = (id, title, author) => {
    fetch(`https://681cfa43f74de1d219ae6e44.mockapi.io/books/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        author: author
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(data => {
      console.log(data)
      loadData()
    })

    console.log("updateBook Book")
  }

  const addBook = (title, author) => {
    fetch(`https://681cfa43f74de1d219ae6e44.mockapi.io/books`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        author: author
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(data => {
      console.log(data)
      loadData()
    })
  }


  const deleteBook = (id) => {
    fetch(`https://681cfa43f74de1d219ae6e44.mockapi.io/books/${id}`, {
      method: "DELETE",
    }).then(response => response.json()).then(data => {
      console.log(data)
      loadData()
    })
    console.log("delete book")
  }


  return (
      <BookContext.Provider value={{
        books,
        curBook,
        setCurBook: setCurBook,
        addBook: addBook,
        updateBook: updateBook,
        deleteBook: deleteBook
      }}>
        <h1>
          Book management
        </h1>
        <div className={"layout-grid"}>
          <div className={"margin-10 border col-1"}>
            <BookList></BookList>
          </div>
          <div className={"margin-10 border"}>
            <div className={"margin-5 border add-wrapper"}>
              <FormAdd></FormAdd>
            </div>
            <div className={"margin-5 border update-wrapper"}>
              <FormUpdate></FormUpdate>
            </div>
          </div>

        </div>

      </BookContext.Provider>
  )
}

export default App
