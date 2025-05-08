
import React from "react";

const Book = (props) => {

  const { book } = props

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
      </div>
  )


}

export default Book