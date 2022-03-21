import { useState } from 'react'

const PostForm = ({
  onSubmit
}) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value)
  }
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  return (
    <div>
      <label htmlFor='author'>
        Author
      </label>
      <input
        id='author'
        type='text'
        onChange={onChangeAuthor}
        value={author}
      />
      <label htmlFor='title'>
        Title
      </label>
      <input
        id='title'
        type='text'
        onChange={onChangeTitle}
        value={title}
      />
      <label htmlFor='content'>
        Content
      </label>
      <textarea
        id='content'
        onChange={onChangeContent}
        value={content}
      />
      <button
        onClick={() => 
          onSubmit({
            author,
            title,
            content
          }
        )}
      >
        Submit
      </button>
    </div>
  )
}

export default PostForm