import { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { context } from '../App'

const TodoItem = ({ todo }) => {
  const { changeDone, delTodo, changeName } = useContext(context)
  const [current, setCurrent] = useState({ id: '', name: '' })
  const inputRef = useRef(null)

  const showEdit = ({ id, name }) => setCurrent({ id, name })
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      changeName(current.id, current.name)
      setCurrent({ id: '', name: '' })
    } else if (e.keyCode === 27) {
      setCurrent({ id: '', name: '' })
    }
  }

  // TodoItem在首次渲染时就会将input框聚焦，但是此时还没有双击，因此必须加上current依赖
  useEffect(() => {
    // console.log(inputRef.current)
    inputRef.current.focus()
  }, [current])

  return (
    <li
      className={classNames(todo.done ? 'completed' : '', {
        editing: current.id === todo.id,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.done}
          onChange={() => changeDone(todo.id)}
        />
        <label onDoubleClick={() => showEdit(todo)}>{todo.name}</label>
        <button className="destroy" onClick={() => delTodo(todo.id)} />
      </div>
      <input
        className="edit"
        ref={inputRef}
        value={current.name}
        onChange={(e) => setCurrent({ ...current, name: e.target.value })}
        onBlur={() => setCurrent({ id: '', name: '' })}
        onKeyUp={onKeyUp}
      />
    </li>
  )
}

export default TodoItem
