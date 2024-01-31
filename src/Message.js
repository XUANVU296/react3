// File: App.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./App.css";

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function Message() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleValidate = () => {
    const newErrors = {};

    if (!form.name) {
      newErrors.name = 'Required';
    }

    if (!form.email) {
      newErrors.email = 'Required';
    } else if (!REGEX.email.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!form.phone) {
      newErrors.phone = 'Required';
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    handleValidate();

    const errorValues = Object.values(errors);
    if (errorValues.every((value) => !value)) {
      alert('Add contact successfully!!!');
    }
  };

  return (
    <div className="App">
      <Formik initialValues={{ name: '', email: '', phone: '' }} onSubmit={handleSubmit}>
        <Form>
          <div className="custom-input">
            <label>Name:</label>
            <Field type="text" name="name" onChange={handleChange} />
            <ErrorMessage name="name" component="p" className="error" />
          </div>

          <div className="custom-input">
            <label>Email:</label>
            <Field type="text" name="email" onChange={handleChange} />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div className="custom-input">
            <label>Phone:</label>
            <Field type="text" name="phone" onChange={handleChange} />
            <ErrorMessage name="phone" component="p" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Message;
