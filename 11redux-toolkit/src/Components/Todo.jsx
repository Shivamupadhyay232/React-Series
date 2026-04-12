import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Todo
