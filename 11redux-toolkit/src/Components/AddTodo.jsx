import React from 'react'

import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/Todo/todoSlice'

const AddTodo = () => {

  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const addTodoHandler = (e) => {
    e.preventDefault()
    if(input.trim() === '') return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12 '>
      <input 
        type="text" 
        placeholder="Add a new todo..." 
        className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Add</button>
    </form>
  )
}

export default AddTodo