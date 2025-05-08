import React, {useContext, useState} from 'react'
import {BookContext} from "./App.jsx";


const EditForm = () => {
  const {updateBook} = useContext(BookContext)

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")



  return (
      <div>

        <form>
          <input type="text" value={title}/>
          <input type="text" value={author}/>
        </form>
        Add form
      </div>
  )
}

export default EditForm