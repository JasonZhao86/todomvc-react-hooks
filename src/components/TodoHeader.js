import { useState } from 'react'

const TodoAdd = ({ addTodo }) => {
  const [todo, setTodo] = useState('')
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTodo(todo)
      setTodo('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={handleKeyUp}
        autoFocus
      />
    </header>
  )
}

export default TodoAdd
