import React from 'react';
import './TodoList.css';

const TodoList = ({ children }) => ( <ol className="todo-list">{ children }</ol> )

export default TodoList
