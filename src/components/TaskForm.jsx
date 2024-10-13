import React, { useState } from "react";

export default function TaskForm({task, setTask}) {

    const [newTask, setNewTask] = useState("");

    function handleAddTask(e) {
        e.preventDefault();
        if (newTask.trim() !== "") {
            setTask([...task, {text: newTask.trim(), checked: false}]);
            setNewTask("");
        }
    };
    return(
        <>
            <div>
                <form className="inputTask">
                    <input type="text" placeholder="Write a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
                    <button onClick={handleAddTask}>Save</button>
                </form>
            </div>
        </>
    )
}