import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { TaskFilter } from "./components/TaskFilter";
import tasks from "./tasks.json";
import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [task, setTask] = useState(tasks);
  const [valuetx, setValuetx] = useState("");

  const addTask = (valuetx) => {
    const newTask = {
      id: nanoid(),
      valuetx,
      done: false,
    };
    setTask([...task, newTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!valuetx.trim()) return
    addTask(valuetx);
    setValuetx("");
  };

  const handleChange = (e) =>{
    setValuetx(e.target.value)
  }

  return (
    <div className="App">
      <TaskForm onHandleSub={handleSubmit} onChange={handleChange} valuetx={valuetx}/>
      <TaskList tasks={task}/>
      <TaskFilter />
    </div>
  );
}

export default App;
