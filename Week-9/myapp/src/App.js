import Form from "./components/Form";
import ToDo from "./components/ToDo";
import {useState} from "react";
import { nanoid } from 'nanoid'

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  } 
  const taskList = tasks.map(task => (
    <ToDo id={task.id} name={task.name} key={task.id} completed={task.completed} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
  ));
  return (
    <div className="App">
     <h1>ToDo App</h1>
     <Form  addTask={addTask} />
     <ul className="todoList">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
