import React from 'react';
import './Todo.css';

const Todo = ({
  complete,
  index,
  title
}, {
  deleteTodo,
  toggleComplete
}) => (
  <li className={`todo ${ complete ? 'todo--complete' : '' }`}>
    <input
      type="checkbox"
      checked={complete}
      onClick={toggleComplete.bind(null, index)} />
    <p>{ title }</p>
    <button onClick={deleteTodo.bind(null, index)}>delete</button>
  </li>
)

Todo.contextTypes = {
  deleteTodo: React.PropTypes.func,
  toggleComplete: React.PropTypes.func
}

export default Todo
