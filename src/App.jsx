import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import Task from './components/Task'

function App() {

  const [task, setTask] = useState([]);

  return (
    <>
    <div className="app">
      <section>
          <h1>Daily Planner</h1>  
        <div>
          <TaskForm task={task} setTask={setTask}/>
          <Task task={task} setTask={setTask}/>
        </div>
      </section>

    </div>
    </>
  )
}

export default App
