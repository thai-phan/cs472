import React, {useContext} from "react";
import {BookContext} from "./App.jsx";

const Book = (props) => {

  const {book} = props

  const {setCurBook, deleteBook} = useContext(BookContext)

  return (
      <div className={"book-row"}>
        <div>
          {book.id}
        </div>
        <div>
          {book.title}
        </div>
        <div>
          {book.author}
        </div>
        <div>
          <button onClick={() => setCurBook(book)}>Update
          </button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      </div>
  )


}

export default Book