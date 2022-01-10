export default function validateInfo(values) {
  let errors = {};

  if (!values.DoctorName.trim()) {
    errors.DoctorName = 'DoctorName required';
  }
 

  if (!values.Age) {
    errors.Age = 'Age required';
  } 
  
  if (!values.Problem) {
    errors.Problem = 'Problem is required';
  } 

  return errors;
}
