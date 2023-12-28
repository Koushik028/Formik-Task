import React, { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  authorname: Yup.string().required('Authorname is required'),
  dob: Yup.string().required('D.O.B is required'),
  bio: Yup.string().required('bio is required'),

});



function AddAuthor()  {
  const initialValues = {
  authorname: '',
  dob: '',
  bio:'',
};

return (
<div className="ubk">
<Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      // Handle form submission here
      axios.post('https://65373e4bbb226bb85dd2fa14.mockapi.io/author',values);
      actions.resetForm();
      actions.Navigate('/books');

      console.log(values);
      actions.setSubmitting(false); // Don't forget to setSubmitting(false) when done
    }}
  >
    {(formikProps) => (
      <Form className='frmb'>
        <h1>Add Author</h1>
        <div>
          <label htmlFor="authorname">Author Name</label>
          <Field className='ff' type="text" id="authorname" name="authorname" />
          <ErrorMessage name="authorname" component="div" />
        </div>

        <div>
          <label htmlFor="author">DOB</label>
          <Field type="date" className='ff' id="dob" name="dob" />
          <ErrorMessage name="dob" component="div" />
        </div>

        <div>
          <label htmlFor="bio">bio</label>
          <Field type="text" id="bio" className='ff' name="bio" />
          <ErrorMessage name="bio" component="div" />
        </div>
         
        <div>
          <br/>
        <button className='btn btn-success' type="submit" disabled={formikProps.isSubmitting}>
          Submit
        </button>

        <Link className='btn btn-danger' to='/'>Back</Link>
        </div>

      </Form>
    )}
  </Formik>
</div>
);
    }
export default AddAuthor
