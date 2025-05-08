
import React, {useContext, useEffect} from "react";
import {BookContext} from "./App.jsx";

const BookList = () => {
  const {books, updateBook} = useContext(BookContext)



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