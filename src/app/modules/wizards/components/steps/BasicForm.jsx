import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

const BasicForm = () => {
  const [values, setValues] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log('Eeeeeeeeeee');
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h1>Basic Form with Formik</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          if (!values.lastName) {
            errors.lastName = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={() => {
          console.log('errro');
        }}>
        {() => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <div>
                <div
                  contentEditable
                  name='firstName'
                  onBlur={handleChange}
                  suppressContentEditableWarning>
                  {values.firstName}
                </div>
                <ErrorMessage name='firstName' component='div' />
              </div>
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <div>
                <div
                  contentEditable
                  name='lastName'
                  onBlur={handleChange}
                  suppressContentEditableWarning>
                  {values.lastName}
                </div>
                <ErrorMessage name='lastName' component='div' />
              </div>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <div>
                <div
                  contentEditable
                  name='email'
                  onBlur={handleChange}
                  suppressContentEditableWarning>
                  {values.email}
                </div>
                <ErrorMessage name='email' component='div' />
              </div>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;
