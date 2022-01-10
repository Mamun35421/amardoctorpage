import React, { useState } from 'react';
import './Form.css';
import FormSignup from './DoctorInfo';
import DoctorInfo2 from './DoctorInfo2';



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div class="form-content-left">
        <img className='form-img' src='https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png' alt='doctor' />
  <div class="container">
  <span>Name: Mamun Or Rashid</span>
    <br/>
  <span>Position: aabbbb</span>
  </div>
</div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <DoctorInfo2 />
        )}
      </div>
    </>
  );
};

export default Form;
