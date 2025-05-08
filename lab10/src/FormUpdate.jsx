import React, {useContext, useEffect, useState} from 'react'
import {BookContext} from "./App.jsx";


const FormUpdate = () => {
  const [formTitle, setFormTitle] = useState("")
  const [formAuthor, setFormAuthor] = useState("")

  const {updateBook, curBook} = useContext(BookContext)
  const {title, author} = curBook

  useEffect(() => {
    if (title) {
      setFormAuthor(title)
    }
    if (author) {
      setFormTitle(author)
    }
  }, [author, title]);

  return (
      <div>
        <form>
          <label htmlFor="title">Title</label>
          <input id={"title"} type="text" value={formTitle} onChange={event => setFormTitle(event.target.value)}/>
          <label htmlFor="author">Author</label>
          <input id={"author"} type="text" value={formAuthor} onChange={event => setFormAuthor(event.target.value)}/>
        </form>
        <button onClick={() => updateBook(formTitle, formAuthor)}>Update Book</button>
      </div>
  )
}

export default FormUpdate