import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
  const [newTask, setNewTask] = useState("");
  const [redtasks, setredTasks] = useState([]);
  const [yellowtasks, setyellowTasks] = useState([]);
  const [greentasks, setgreenTasks] = useState([]);

  function ClearInput(){
    setNewTask("")
  }

  function RemoveTask(index) {
    let removeTask = tasks.filter((t,i) => i != index)
    setTasks(removeTask)
  }

  function EditTask(index) {
    setNewTask(tasks[index])
    RemoveTask(index);
  }

  const formik = useFormik({
    initialValues: {
      tarefa: '',
      prazo: '',
      status: '',
    },
    onSubmit: values => {
      if (values.status === "do"){
          redtasks.push(values);
          setredTasks(redtasks);
          ClearInput();
      }else if (values.status === "doing"){
          yellowtasks.push(values);
          setyellowTasks(yellowtasks);
          ClearInput();
      }else if (values.status === "finished"){
          greentasks.push(values);
          setgreenTasks(greentasks);
          ClearInput();
      }
    },
  });
  return (
    <section>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="tarefa">Sua Tarefa</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tarefa}
          />

          <label htmlFor="prazo">Prazo</label>
          <input
            type="date"
            onChange={formik.handleChange}
            value={formik.values.prazo}
          />

          <label htmlFor="status">Status</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.status}
          />

          <button type="submit">Submit</button>
        </form>

    <label htmlFor="taskBoard" className='labelBoard'>Quadro de Tarefas</label>
    <div className='taskBoard'>
        <section className="task-list-red">
            <h2 className='do'>A fazer </h2>
            {
                redtasks.map((redtask,index) => (
                    <Task task={redtask} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                ))
            }
        </section>

        <section className="task-list-yellow">
            <h2 className='doing'>Fazendo </h2>
            {   
                yellowtasks.map((yellowtask,index) => (
                    <Task task={yellowtask} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                ))
            }   
        </section>
        
        <section className="task-list-green">
            <h2 className='finished'>Finalizado </h2>
            {
                greentasks.map((greentask,index) => (
                    <Task task={greentask} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                ))
            }
        </section>
    </div>
  </section>
  );
};

export default Form;