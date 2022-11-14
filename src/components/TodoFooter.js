const TodoFooter = ({ list, type, changeType, clearCompleted }) => {
  const leftCount = list.filter((item) => !item.done).length
  const lis = [
    { id: 1, href: '/', htmlText: 'All' },
    { id: 2, href: '/active', htmlText: 'Active' },
    { id: 3, href: '/completed', htmlText: 'Completed' },
  ]

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        {lis.map((item) => (
          <li key={item.id}>
            <a
              className={type === item.htmlText ? 'selected' : ''}
              href={`#${item.href}`}
              onClick={() => changeType(item.htmlText)}
            >
              {item.htmlText}
            </a>
          </li>
        ))}
      </ul>
      {list.filter((item) => item.done).length !== 0 && (
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default TodoFooter
