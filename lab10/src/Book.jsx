import React, {useContext} from "react";
import {BookContext} from "./App.jsx";

const Book = (props) => {

  const {book} = props

  const {setCurBook, deleteBook} = useContext(BookContext)

  return (
      // className={"book-row border"}
      <tr>
        <td> {book.id}</td>
        <td> {book.title}</td>
        <td> {book.author}</td>
        <td>
          <button onClick={() => setCurBook(book)}>Select to Update</button>
        </td>
        <td>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </td>
      </tr>
  )
}

export default Book