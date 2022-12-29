import './App.css';
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';


export default function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          about: "",
          phoneNumber: "",
        }}
        onSubmit={(values) =>
          {
          setData((prevState) => [...prevState,values])
        }}
      >
        {(props) => (
          <Form>
            <Field name="username" placeholder="Username"/>
            <Field name="password" type="password" placeholder="Password"/>
            <Field name="email" type="email" placeholder="Email"/>
            <Field name="about" type="text" placeholder="About"/>
            <Field name="phoneNumber" type="number" placeholder="Phone"/>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>

      {
        <ol>
          {data.map((el, index) => {
            return (
              <li key={index}>
                <p>Username: {el.username}</p>
                <p>Password: {el.password}</p>
                <p>Email: {el.email}</p>
                <p>About: {el.about}</p>
                <p>Phone: {el.phoneNumber}</p>
              </li>
            )
          })}
        </ol>
      }
    </div>
  );
}