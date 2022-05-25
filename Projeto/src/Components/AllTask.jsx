import React, { useState } from 'react';
import Task from './Task';

function AllTask() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [newDate, setNewDate] = useState("");
    const [dates, setDates] = useState([]);
    const [newStatus, setNewStatus] = useState("");
    const [statuss, setStatuss] = useState([]);
    const [red, setRed] = useState([]);
    const [yellow, setYellow] = useState([]);
    const [green, setGreen] = useState([]);

    function AddTask(task, date, statusTask, index) {
        let allTasks = tasks;
        allTasks.push(task);
        setTasks(allTasks);
        let allDates = dates;
        allDates.push(date);
        setDates(allDates);
        let allStatuss = statuss;
        allStatuss.push(statusTask);
        setStatuss(allStatuss);
        let cardTask = {
            tarefa: task,
            data: date,
            status: statusTask
        }

        if (cardTask.status === "do"){
            let allRed = red;
            allRed.push(cardTask);
            setRed(allRed);

        }else if (cardTask.status === "doi"){
            let allYellow = yellow;
            allYellow.push(cardTask);
            setYellow(allYellow);

        }else if (cardTask.status === "finished"){
            let allGreen = green;
            allGreen.push(cardTask);
            setGreen(allGreen);

        }

        ClearInput();
    }

    function ClearInput(){
        setNewTask("")
        setNewDate("")
        setNewStatus("")
    }

    function RemoveTask(index, status) {
        if (status === "do"){
            let removeTask = red.filter((t,i) => i != index)
            setRed(removeTask)
        }else if (status === "doing"){
            let removeTask = yellow.filter((t,i) => i != index)
            setYellow(removeTask)
        } else if (status === "finished"){
            let removeTask = green.filter((t,i) => i != index)
            setGreen(removeTask)
        }
    }

    function EditTask(index, status, data, task) {
            setNewTask(task)
            setNewDate(data)
            setNewStatus(status)   
        RemoveTask(index, status);
    }

  return (
      <section className="container">            
            <label id="input-group" className='labelBoard'>Cadastrar uma tarefa</label>
            <section className='input-group'>
                <div className='input-each'>
                    <label htmlFor="tarefa">Sua Tarefa</label>
                    <input 
                        name="tarefa"
                        value={newTask} 
                        onInput={(event)=> setNewTask(event.target.value)}/>
                    <br/>
                </div>
                <div className='input-each'>
                    <label htmlFor="data">Prazo</label>
                    <input 
                        name='data'
                        value={newDate}
                        type="date"
                        onInput={(event)=> setNewDate(event.target.value)}/>
                    <br/>                
                </div>
                <div className='input-each'>
                    <label htmlFor="statusSelect">Status</label>
                        <select name="statusSelect" value={newStatus} onChange={(event)=> setNewStatus(event.target.value)}>
                            <option value="">Escolha uma opção: </option>
                            <option value="do">A fazer</option>
                            <option value="doing">Fazendo</option>
                            <option value="finished">Finalizado</option>
                        </select>
                </div>                   
            </section>
            <button type="submit" onClick={() => AddTask(newTask, newDate, newStatus)}>Inserir Tarefa</button>
            <label id="taskBoard" className='labelBoard'>Quadro de Tarefas</label>
            <div className='taskBoard'>
                <section className="task-list-red">
                    <h2 className='do'>A fazer </h2>
                    {
                        red.map((task, index) => (
                            <Task task={task.tarefa} status={task.status} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </section>

                <section className="task-list-yellow">
                    <h2 className='doing'>Fazendo </h2>
                    {   
                        yellow.map((task,index) => (
                            <Task task={task.tarefa} status={task.status} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }   
                </section>
                
                <section className="task-list-green">
                    <h2 className='finished'>Finalizado </h2>
                    {
                       green.map((task,index) => (
                            <Task task={task.tarefa} status={task.status} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </section>
            </div>
      </section>
  );
}

export default AllTask;