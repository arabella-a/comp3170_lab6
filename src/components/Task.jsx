import React from "react"

export default function Task({task, setTask}) {


    function handleDeleteTask(index) {
        const newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
    };

    function handleToggleTask(index) {
        const newTask = [...task];
        newTask[index].checked = !newTask[index].checked;
        setTask(newTask);
    };

    return(
        <>
            <div>
                <h2>You have {task.length} tasks remaining</h2>
                <div className="taskList">
                    <ul>
                        {task.map((task, index) => (
                            <li key={index}>
                                <div className="inputLabel">
                                    <input type="checkbox" checked={task.checked} onChange={() => handleToggleTask(index)}/>
                                    <label style={{textDecoration: task.checked ? "line-through" : "none"}}>
                                        {task.text}
                                    </label>
                                </div>
                                <button onClick={() => handleDeleteTask(index)} className="removeBtn">Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}