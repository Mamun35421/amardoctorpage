import React, { useState } from 'react';
import './Form.css';
import { ListGroupItem } from 'react-bootstrap';
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
        <br/>
  
      <div>
      <ol id='spcial'>
      <h2>Dr.  Mamun Or Rashid</h2>
      <br/>
      <h4>Specialties</h4>

      <li>Opthslmology(Eye).Cataract</li>
      <li>Opthslmology(Eye).Cataract</li>
      <li>Opthslmology(Eye).Cataract</li>
      </ol>
     
      </div>
 
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
  <h2>Doctors's Schedule </h2>

<div>
<table class="table table-striped">

    

<tbody>

  <tr>
  <th scope="col">Day</th>
    <td>SUN</td>
    <td>THU</td>
    <td>FRI</td>
  </tr>
  <tr>
  <th scope="col">Time</th>
    <td>14:00-20:00</td>
    <td>17:00-20:00</td>
    <td>17:00-20:00</td>
  </tr>
  <tr>
  <th scope="col">Location</th>
    <td>AmarDoctorBD</td>
    <td>AmarDoctorBD</td>
    <td>AmarDoctorBD</td>
  </tr>
  
</tbody>

</table>
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
