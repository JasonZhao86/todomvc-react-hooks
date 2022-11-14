import { createContext } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import useTodos from './components/hooks/useTodos'
import './styles/base.css'
import './styles/index.css'

// 模拟从后台取过来的数据
// const todos = [
//   { id: 1, name: '学习hooks', done: false },
//   { id: 2, name: '学习redux', done: false },
//   { id: 3, name: '学习react', done: true },
// ]

export const context = createContext()
const { Provider } = context

const App = () => {
  const {
    type,
    list,
    addTodo,
    delTodo,
    changeDone,
    changeName,
    toggleAll,
    clearCompleted,
    changeType,
  } = useTodos()

  return (
    <Provider value={{ changeDone, delTodo, changeName }}>
      <section className="todoapp">
        <TodoHeader addTodo={addTodo}></TodoHeader>
        <TodoMain list={list} type={type} toggleAll={toggleAll}></TodoMain>
        <TodoFooter
          list={list}
          type={type}
          changeType={changeType}
          clearCompleted={clearCompleted}
        ></TodoFooter>
      </section>
    </Provider>
  )
}

export default App
