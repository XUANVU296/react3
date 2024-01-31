// File: App.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./App.css";

function App() {
  const [form, setForm] = useState({});
  
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidate = () => {
    const errors = {};

    if (!form.to) {
      errors.to = 'Required';
    } else if (!REGEX.email.test(form.to)) {
      errors.to = 'Invalid email address';
    }

    if (!form.title) {
      errors.title = 'Required';
    }

    if (!form.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  const handleSubmit = () => {
    const errors = handleValidate();

    if (Object.values(errors).every((value) => !value)) {
      alert('Sent successfully!!!');
    }
  };

  return (
    <div className="container">
      <Formik initialValues={{ to: '', title: '', message: '' }} onSubmit={handleSubmit}>
        <Form>
          <div className="custom-input">
            <label>To:</label>
            <Field type="text" name="to" onChange={handleChange} value={form.to || ''} />
            <ErrorMessage name="to" component="p" className="error" />
          </div>

          <div className="custom-input">
            <label>Title:</label>
            <Field type="text" name="title" onChange={handleChange} value={form.title || ''} />
            <ErrorMessage name="title" component="p" className="error" />
          </div>

          <div className="custom-input">
            <label>Message:</label>
            <Field as="textarea" name="message" onChange={handleChange} value={form.message || ''} />
            <ErrorMessage name="message" component="p" className="error" />
          </div>

          <div className="custom-input">
            <label>Attachments:</label>
            <input type="file" name="attachments" onChange={handleChange} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;