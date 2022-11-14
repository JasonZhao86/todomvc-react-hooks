import { useState, useEffect } from 'react'

const useTodos = () => {
  /**
   * useState支持两种写法：
   * 1、useState(initValue)
   * 2、useState(() => initValue)
   */
  const [type, setType] = useState('All')
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('todolist')) || []
  )

  // 保存到本地，属于副作用
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(list))
  }, [list])

  const addTodo = (name) =>
    setList([...list, { id: Date.now(), name, done: false }])

  const delTodo = (id) => setList(list.filter((item) => item.id !== id))

  // 修改任务状态
  const changeDone = (id) =>
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done }
        } else {
          return item
        }
      })
    )

  // 修改任务的名字
  const changeName = (id, todoName) =>
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, name: todoName }
        } else {
          return item
        }
      })
    )

  // 全选/反选
  const toggleAll = (done) =>
    setList(list.map((item) => ({ ...item, done: done })))

  // 清除已有的任务类型
  const clearCompleted = () => setList(list.filter((item) => !item.done))

  // 赛选任务类型
  const changeType = (typeName) => setType(typeName)

  return {
    type,
    list,
    addTodo,
    delTodo,
    changeDone,
    changeName,
    toggleAll,
    clearCompleted,
    changeType,
  }
}

export default useTodos
