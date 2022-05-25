import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
    const formik = useFormik({
      initialValues: { 
            tarefa: "",
            data: "",
            status: ""
        },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="tarefa">Sua Tarefa</label>
        <input
          id="tarefa"
          name="tarefa"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tarefa}
        />
        <br/>
        <label htmlFor="data">Prazo</label>
        <input
          id="data"
          name="data"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.data}
        />
        <br/>
        <label htmlFor="status">Status</label>
        <Field 
            name="status" 
            as="select"     
            id="status" 
            onChange={formik.handleChange}
            value={formik.values.status}>
            <option value="do">A fazer</option>
            <option value="doing">Fazendo</option>
            <option value="finished">Finalizado</option>
        </Field>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  };
  

export default Form;

