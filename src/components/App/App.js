import React, { Component } from 'react';
import Todo from './../Todo/Todo';
import TodoList from './../TodoList/TodoList';
import './App.css';

class App extends Component {

  static contextTypes = {
    addTodo: React.PropTypes.func,
    getTodos: React.PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  onChange = (e) => {
    const { value: title } = e.target
    this.setState({ title })
  }

  handleAddTodo = () => {
    const { title } = this.state
    const { addTodo } = this.context
    if (title) { addTodo(title) }
  }

  render() {

    const todos = this.context.getTodos()

    return (
      <div className="app">
        <TodoList>
          { todos.map((todo, i) => <Todo { ...todo } index={i} key={i}/> ) }
        </TodoList>
        <input
          onChange={this.onChange}
          type="text" />
        <button onClick={this.handleAddTodo} >Add Todo</button>
      </div>
    );
  }
}

export default App
