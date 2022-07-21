// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import './style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container">
        <h2>Render Lists</h2>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>

        </form>

        <Overview tasks={tasks} />

      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  };
}

export default App;

