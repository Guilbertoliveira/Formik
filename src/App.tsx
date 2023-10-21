import { useState } from 'react'
import './App.css'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
  const [count, setCount] = useState(0)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          placeholder={formik.values.firstName}
          name="firstName"
        />
        <input
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          placeholder={formik.values.lastName}
          name="lastName"
        />
        <button type="submit">Submit</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>{formik.values.firstName}</h1>
        <h1>{formik.values.lastName}</h1>
      </div>
    </>
  );
}

export default App
