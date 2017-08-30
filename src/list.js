import React, { Component } from 'react';
import seed from './seed_data';
import Todo from './todo';

export default class List extends Component {

  constructor(props) {
    super(props);
    var todos = seed;
    this.state = {
      todos: todos,
      todo: '',
      term: '',
      tag: ''
    }
  }

  handleTagChange(event) {
    this.setState({
      ...this.state,
      tag : event.target.value
    })
  }

  handleFormChange (event) {
    this.setState({
      ...this.state, todo : event.target.value
    })
  }

  handleTermChange (event) {
    this.setState({
      ...this.state, term : event.target.value
    })
  }

  handleAddTodo (event) {
    event.preventDefault();
    const todo = { title : event.target.title.value,
                   status: 'Undone'
                 };
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos, todo: ''
    })
  }

  handleDeleteTodo (id) {
    const todos = this.state.todos;
    todos.splice(id, 1);
    this.setState({
      todos
    })
  }

  handleUpdateTodo (index, value) {
    const todos = this.state.todos;
    todos[index] = {
      title: value,
      status : todos[index].status
    };
    this.setState({
      ...this.state,
      todos
    })
  }

  handleSort() {
    const todos = this.state.todos.slice().sort(function(a,b){
      return a["title"] > b["title"];
    });
    this.setState({
      todos
    })
  }

  handleTodoDone(index, value) {
    console.log(this.state.todos)
    const todos = this.state.todos.slice();
    todos[index].status = value;
    this.setState({
      ...this.state,
      todos : todos
    })
  }

  render() {

    return (
      <div>
        <p2>My Todo List</p2>
        <form className="form-group row form-inline justify-content-md-center" onSubmit={this.handleAddTodo.bind(this)}>
          <input type="text" name="title" value={this.state.todo} className="form-control col-4" onChange={this.handleFormChange.bind(this)}/>
          <button type="submit" value="submit" className="btn btn-primary">Submit</button>
          <input type="button" value="Sort" className="btn btn-success" onClick={this.handleSort.bind(this)} ></input>
        </form>
        <ul className="justify-content-md-center">
          <li className="form-inline justify-content-md-center">
            <span className="input-group-addon col-2">Search</span>
            <input type="text" name="term" value={this.state.term} className="form-control col-4" onChange={this.handleTermChange.bind(this)}/>
          </li>
          <br />
          <Todo
            todos = {this.state.todos}
            handleDeleteTodo = {this.handleDeleteTodo.bind(this)}
            handleUpdateTodo = {this.handleUpdateTodo.bind(this)}
            term = {this.state.term}
            handleTodoDone = {this.handleTodoDone.bind(this)}
            tag = {this.state.tag}
          />
        </ul>
        <div className="form-group row form-inline justify-content-md-center">
          <span className="input-group-addon col-1">Catagory:</span>
          <input type="button" value="" className="btn btn-primary" onClick={this.handleTagChange.bind(this)}></input>
          <input type="button" value="Done" className="btn btn-success" onClick={this.handleTagChange.bind(this)}></input>
          <input type="button" value="Undone" className="btn btn-danger" onClick={this.handleTagChange.bind(this)}></input>
        </div>
      </div>
    )
  }
}
