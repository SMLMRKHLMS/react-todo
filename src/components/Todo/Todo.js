import React from 'react';
import './Todo.css';

class Todo extends React.Component {

  static contextTypes = {
    editTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func,
    toggleComplete: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = { readonly: true }
  }

  handleOnChange = ({ target: { value: title } }) => {
    const { index } = this.props
    const { editTodo } = this.context
    editTodo(index, title)
  }

  toggleReadonly = () => { this.setState({ readonly: !this.state.readonly }) }

  render() {

    const { complete, index, title } = this.props;
    const { deleteTodo, toggleComplete } = this.context;
    const { readonly } = this.state;

    return (
     <li className={`todo ${ complete ? 'todo--complete' : '' }`}>
       <input
         type="checkbox"
         checked={complete}
         onClick={toggleComplete.bind(null, index)}/>
       <input
         className={`title  ${ readonly ? 'title--readonly' : '' }`}
         value={title}
         onBlur={this.toggleReadonly}
         onChange={this.handleOnChange}
         onFocus={this.toggleReadonly}
         readOnly={readonly}
         type="text" />
       <button onClick={deleteTodo.bind(null, index)}>delete</button>
     </li>
    )
  }
}



export default Todo
