import React from 'react'

const store = (Component) => class Store extends React.Component {

  static propTypes = { initialState: React.PropTypes.object }

  static defaultProps = { initialState: { todos: [] } }

  static childContextTypes = {
    addTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func,
    editTodo: React.PropTypes.func,
    getTodos: React.PropTypes.func,
    toggleComplete: React.PropTypes.func
  }

  getChildContext = () => ({
    addTodo: this.addTodo,
    deleteTodo: this.deleteTodo,
    editTodo: this.editTodo,
    getTodos: this.getTodos,
    toggleComplete: this.toggleComplete
  })

  constructor(props) {
    super(props)
    this.state = props.initialState
  }

  addTodo = (title) => {
    const todo = { title, complete: false }
    const todos = this.state.todos.concat(todo)
    this.setState({ todos })
  }

  editTodo = (index, title) => {
    const { todos } = this.state
    const todo = todos[index]
    todo.title = title
    todos[index] = todo
    this.setState({ todos })
  }

  toggleComplete = (index) => {
    const { todos } = this.state
    const todo = todos[index]
    todo.complete = !todo.complete
    todos[index] = todo
    this.setState({ todos })
  }

  deleteTodo = (index) => {
    const { todos } = this.state
    todos.splice(index, 1)
    this.setState({ todos })
  }

  getTodos = () => { return this.state.todos }

  render() { return <Component /> }
}

export default store
