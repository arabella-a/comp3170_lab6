import React, { useState } from "react";

export default function TaskForm({ task, setTask }) {

    const [newTask, setNewTask] = useState("");

    function handleAddTask(e) {
        e.preventDefault();
        if (newTask.trim() !== "") {
            setTask(prevTasks =>[
                ...prevTasks, {text: newTask.trim(), checked: false}]);
            setNewTask("");
        }
    };
    return(
        <>
            <div>
                <form className="inputTask" onSubmit={handleAddTask}>
                    <input type="text" placeholder="Write a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    )
}