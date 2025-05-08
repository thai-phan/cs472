
import React, {useContext, useEffect} from "react";
import {BookContext} from "./App.jsx";
import Book from "./Book.jsx";

const BookList = () => {
  const {books} = useContext(BookContext)



  return (
     <div>
       List Books
       {
           books && books.map((book, idx) => <Book key={idx} book={book} />)
       }
     </div>
  )
}

export default BookList