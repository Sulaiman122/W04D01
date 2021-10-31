import React, { Component } from "react";
import ToDoItem from "../toDoItem/toDoItem";
import "./style.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "play" },
        { id: 2, name: "study" },
        { id: 3, name: "code" },
      ],
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    let inp = e.target.task.value;
    if (inp) {
      let newObj = { id: this.state.todos.length + 1, name: inp };
      this.setState({ todos: [...this.state.todos, newObj] });
    }
  };

  handleDelete = (i) => {
    let filtered = this.state.todos.filter((item) => item.id !== i);
    this.setState({ todos: filtered });
  };

  handleEdit = (i) => {
    let newValue = prompt("Edit this task:");
    let mine = this.state.todos.map(()=>{
        return this.state.todos[i-1].name = newValue;
    })
    this.setState({mine})
  };

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.submitHandler}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <h1>To Do List:</h1>
        <ul>
          {this.state.todos.map((todo, i) => (
            <ToDoItem
              task={todo}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              key={i}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
