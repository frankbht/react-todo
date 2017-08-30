import React, { Component } from 'react';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos : this.props.todos,
      focus : -1,
      input : '',
      term : this.props.term,
      tag : this.props.tag
    }
  }
  handleEditTodo(index) {
    this.setState({
      ...this.state,
      focus : index,
      input : this.props.todos[index].title
    })
  }

  handleInputChange(event) {
    this.setState({
      ...this.state,
      input : event.target.value
    })
  }

  handleInputBlur(event) {
    this.props.handleUpdateTodo(this.state.focus, event.target.value);
    this.setState({
      todos : this.props.todos,
      focus : -1,
      input : ''
    })
  }

  render() {
    //console.log(this.props.term)
    const word = this.props.term;
    const tag = this.props.tag;
    console.log(this.state.todos);
    const todos = this.props.todos.map((todo, index) => {
      return (

        <li key={index} className={
            todo.title.includes(word) && todo.status.includes(tag)?
            "form-group row form-inline justify-content-md-center input-group" :
            "form-group row form-inline justify-content-md-center input-group filterd"
          }>
          {index===this.state.focus?
            <input type="text" className="form-control col-4" value={this.state.input} onChange={this.handleInputChange.bind(this)} onBlur={this.handleInputBlur.bind(this)} /> :
            <h2 className="form-control col-4" onClick={()=>this.handleEditTodo(index)}>{todo.title}</h2>
          }
          {}
          {todo.status==='Done'?
            <input type="button" value="Undone" className="btn btn-warning" onClick={()=>this.props.handleTodoDone(index, "Undone")}></input> :
            <input type="button" value="Done" className="btn btn-success" onClick={()=>this.props.handleTodoDone(index, "Done")}></input>
          }
          <input type="button" value="Delete" className="btn btn-danger" onClick={()=>this.props.handleDeleteTodo(index)}></input>
        </li>
      )
    })

    return (
      <div>
        {todos}
      </div>
    )
  }
}
