// File: App.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./App.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidate = () => {
    const newErrors = {};

    if (!form.title) {
      newErrors.title = 'Required';
    }

    if (!form.number) {
      newErrors.number = 'Required';
    } else if (!/^\d+$/.test(form.number)) {
      newErrors.number = 'Only numbers are allowed';
    }

    return newErrors;
  };

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = () => {
    const newErrors = handleValidate();

    if (Object.values(newErrors).every((value) => !value)) {
      const newBooks = [...books];

      if (indexSelected > -1) {
        newBooks.splice(indexSelected, 1, form);
      } else {
        newBooks.push(form);
      }

      setBooks(newBooks);
      setForm({});
      setIndexSelected(-1);
    }
  };

  return (
    <div className="container">
      <Formik initialValues={{ title: '', number: '' }} onSubmit={handleSubmit}>
        <Form>
          <div className="custom-input">
            <label>Title:</label>
            <Field type="text" name="title" onChange={handleChange} value={form.title || ''} />
            <ErrorMessage name="title" component="p" className="error" />
          </div>

          <div className="custom-input">
            <label>Number:</label>
            <Field type="text" name="number" onChange={handleChange} value={form.number || ''} />
            <ErrorMessage name="number" component="p" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table boder={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td className="flex">
                <button className="width-auto" onClick={() => handleSelect(book, index)}>Edit</button>
                <button className="width-auto" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
