import React from 'react';
import validate from './validateInfo';
import { Dropdown } from 'react-bootstrap';
import useForm from './useForm';

import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
       
        <div className='form-inputs'>
          <label className='form-label'>DoctorName</label>
          <input
            className='form-input'
            type='text'
            name='DoctorName'
            placeholder='Enter your DoctorName'
            value={values.DoctorName}
            onChange={handleChange}
          />
          {errors.DoctorName && <p>{errors.DoctorName}</p>}
        </div>
        <div>
        <form >
 
  <select name="cars" id="cars">
    <option >Sesson</option>
    <option >10am-12pm</option>
    <option >2pm-4pm</option>
    <option >5PM-8PM</option>
  </select>
 
</form>
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Patient Name</label>
          <input
            className='form-input'
            type='text'
            name='PatientName'
            placeholder='Enter your PatientName'
            value={values.DoctorName}
            onChange={handleChange}
          />
          {errors.DoctorName && <p>{errors.DoctorName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Age</label>
          <input
            className='form-input'
            type='number'
            name='Age'
            placeholder='Enter your Age'
            value={values.Age}
            onChange={handleChange}
          />
          {errors.Age && <p>{errors.Age}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Problem</label>
          <input
            className='form-input'
            type='text'
            name='Problem'
            placeholder='Enter your Problem'
            value={values.Problem}
            onChange={handleChange}
          />
          {errors.Problem && <p>{errors.Problem}</p>}
        </div>
       
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
