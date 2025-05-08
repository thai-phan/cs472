import React, {useContext, useState} from 'react'
import {BookContext} from "./App.jsx";


const FormAdd = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const {addBook} = useContext(BookContext)


  return (
      <div>
        <form>
          <label htmlFor="title">Title</label>
          <input id={"title"} type="text" value={title} onChange={event => setTitle(event.target.value)}/>
          <label htmlFor="author">Author</label>
          <input id={"author"} type="text" value={author} onChange={event => setAuthor(event.target.value)}/>
        </form>
        <button onClick={() => addBook(title, author)}>Add book</button>

      </div>
  )
}

export default FormAdd