import { useState } from 'react'
import axios from "axios"


function App() {
  const [title , setTitle] = useState("")
  const [author , setAuthor] = useState("")
  const [content , setContent] = useState("")

  function handleSubmit(e) {
        e.preventDefault()
        axios.post("/api/addPost" , {
          title : title,
          author: author, 
          content :content 
        } )
  }
 

  return (
    <form className='add-post' onSubmit={handleSubmit}>
      <input type='text' placeholder='enter post title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <input type='text' placeholder='enter post author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      <textarea placeholder='enter post content' onChange={(e) => setContent(e.target.value)}>{content}</textarea>
      <button type='submit'>click</button>
      
    </form>
  )
}

export default App
