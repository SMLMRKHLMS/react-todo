import React from 'react';
import './Todo.css';

const Todo = ({
  active,
  complete,
  index,
  title
}, {
  deleteTodo,
  editTodo,
  toggleActive,
  toggleComplete
}) => (
 <li className={`todo ${ complete ? 'todo--complete' : '' }`}>
   <input
     type="checkbox"
     checked={complete}
     onClick={toggleComplete.bind(null, index)}/>
   <input
     className={`title  ${ !active ? 'title--readonly' : '' }`}
     value={title}
     onBlur={toggleActive.bind(null, index)}
     onChange={editTodo.bind(null, index)}
     onFocus={toggleActive.bind(null, index)}
     readOnly={!active}
     type="text" />
   <button onClick={deleteTodo.bind(null, index)}>delete</button>
 </li>
)

Todo.contextTypes = {
  editTodo: React.PropTypes.func,
  deleteTodo: React.PropTypes.func,
  toggleActive: React.PropTypes.func,
  toggleComplete: React.PropTypes.func
}



export default Todo
