import React, {useContext, useEffect} from "react";
import {BookContext} from "./App.jsx";
import Book from "./Book.jsx";

const BookList = () => {
  const {books} = useContext(BookContext)


  return (
      <div className={"table"}>
        <table className={"border book-table"}>
          <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          </tbody>
          {
              books && books.map((book, idx) => <Book key={idx} book={book}/>)
          }

        </table>

      </div>
  )
}

export default BookList