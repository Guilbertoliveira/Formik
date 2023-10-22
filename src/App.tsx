import { useState } from 'react'
import './App.css'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { Select } from './components/Select';

export function FormComponent() {
  const Raça = [{
    label: 'Cão',
    value: 'cao'
  }, {
    label: 'Gato',
    value: 'gato'
  },
  {
    label: 'Humano',
    value: 'humano'
  }]

  const [count, setCount] = useState(0)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      race: '',

    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
      formik.resetForm()

    }
  });




  const Genero = [{
    label: 'masculino',
    value: 'male'
  }, {
    label: 'feminino',
    value: 'female'
  }]



  const handleSelect1Change = (e: any) => {
    const selectedOption = e.target.value;
    formik.setFieldValue('race', selectedOption);
    formik.setFieldValue('gender', '')
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
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

      <div>
        <Select formik={formik} tipo={Raça} valorSelect='race' title='Raça' handle={handleSelect1Change} />
        <Select formik={formik} tipo={Genero} valorSelect='gender' title='Genero' isDisabled={formik.values.race !== "humano"} handle={formik.handleChange} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>{formik.values.firstName}</h3>
        <h3>{formik.values.lastName}</h3>
        <h3>{formik.values.race}</h3>
        <h3>{formik.values.gender}</h3>

      </div>
    </>
  );
}


