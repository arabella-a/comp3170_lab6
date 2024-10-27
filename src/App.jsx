import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import Categories from './components/Categories';

function App() {
    const [task, setTask] = useState([]);
    const [filterType, setFilterType] = useState(0);

    const filterCategories = 
        filterType === 0 
            ? task 
            : filterType === 1 
            ? task.filter(taskItem => taskItem.checked) 
            : task.filter(taskItem => !taskItem.checked);

    const taskList = filterCategories.map((taskItem, index) => (
        <Task key={index} task={taskItem} setTask={setTask} />
    ));

    return (
        <div className="app">
            <section>
                <h1>Daily Planner</h1>
                <TaskForm task={task} setTask={setTask} />
                <Categories setFilter={setFilterType} />
                <h2>You have {filterCategories.length} tasks remaining.</h2>
                <div className="taskList">
                    {taskList}
                </div>
            </section>
        </div>
    );
}

export default App;
