import { useState } from 'react'
import TodoItem from './TodoItem'

const TodoMain = ({ list, type, toggleAll }) => {
  const [toggle, setToggle] = useState(() => list.every((item) => item.done))

  let showList = []
  if (type === 'Active') {
    showList = list.filter((item) => !item.done)
  } else if (type === 'Completed') {
    showList = list.filter((item) => item.done)
  } else {
    showList = list
  }

  const handleChange = (e) => {
    setToggle(e.target.checked)
    toggleAll(e.target.checked)
  }
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={toggle}
        onChange={handleChange}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {showList.map((item) => (
          <TodoItem key={item.id} todo={item}></TodoItem>
        ))}
      </ul>
    </section>
  )
}

export default TodoMain
