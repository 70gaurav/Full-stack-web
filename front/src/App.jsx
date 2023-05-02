import { useState } from 'react'


function App() {
  const [title , setTitle] = useState("")
  const [author , setAuthor] = useState("")
  const [content , setContent] = useState("")

  function handleSubmit(e) {
        e.preventDefault()
        axios.post("/" , {
          title : title,
          author: author, 
          content :content 
        } )
  }
 

  return (
    <form className='add-post' onSubmit={handleSubmit}>
      <input type='text' placeholder='enter post title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <input type='text' placeholder='enter post author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      <textarea placeholder='enter post content' onChange={(e) => setContent(e.target.value)}>{content}`</textarea>
      <button type='submit'></button>
      
    </form>
  )
}

export default App
