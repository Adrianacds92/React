import React, { useState } from 'react';

import Task from './Task'
function AllList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([""]);

    function AddTask(task, index) {
        let allTasks = tasks;
        allTasks.push(task);

        setTasks(allTasks);
        ClearInput();
    }

    function ClearInput() {
        setNewTask("")
    }

    function RemoveTask(index) {
        let removeTask = tasks.filter((t, i) => i != index)
        setTasks(removeTask)
    }

    function EditTask(index) {
        setNewTask(tasks[index])
        RemoveTask(index);
    }

    return (
        <section className="container">
            <input className='tarefa' type='text'
                value={newTask}
                onInput={
                    (event) =>
                        setNewTask(event.target.value)

                } />
            <input className='date' type='date'
                value={newTask}
                onInput={
                    (event) =>
                        setNewTask(event.target.value)

                } />




            <button type="submit" onClick={() => AddTask(newTask)}>Add</button>
            {
                <section className="task-list">
                    {
                        tasks.map((task, index) => (
                            <Task task={task} index={index} removeTask={RemoveTask} editTask={EditTask} key={index} />
                        ))
                    }
                </section>}

            <select className="opc">
                <option value="fazer">A Fazer</option>
                <option value="fazendo">Fazendo</option>
                <option value="finalizado">Finalizado</option>
            </select>
        </section>

    );
}

export default AllList;