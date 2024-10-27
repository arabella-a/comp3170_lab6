import React from "react";

export default function Task({ task, setTask }) {
    function handleDeleteTask() {
        setTask(prevTasks => prevTasks.filter(t => t !== task));
    }

    function handleToggleTask() {
        setTask(prevTasks =>
            prevTasks.map(t => 
                t === task ? { ...t, checked: !t.checked } : t
            )
        );
    }

    return (
        <div className="tasks">
            <div className="inputLabel">
                <input type="checkbox" checked={task.checked} onChange={handleToggleTask} />
                <label style={{ textDecoration: task.checked ? "line-through" : "none" }}>
                    {task.text}
                </label>
            </div>
            <button onClick={handleDeleteTask} className="removeBtn">Remove</button>
        </div>
    );
}
