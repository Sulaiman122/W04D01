import React, { Component } from "react";
import "./style.css";

class toDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          <p>{this.props.task.name}</p>
          <p
            className="edit"
            onClick={() => this.props.handleEdit(this.props.task.id)}
          >
            Edit
          </p>
          <h5
            className="remove"
            onClick={() => this.props.handleDelete(this.props.task.id)}
          >
            X
          </h5>
        </li>
      </div>
    );
  }
}
export default toDoItem;
