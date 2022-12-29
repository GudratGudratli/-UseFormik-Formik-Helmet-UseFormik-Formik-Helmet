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
        onSubmit={(values) => {
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
          {data.map((element, index) => {
            return (
              <li key={index}>
                <p>Username: {element.username}</p>
                <p>Password: {element.password}</p>
                <p>Email: {element.email}</p>
                <p>About: {element.about}</p>
                <p>Phone: {element.phoneNumber}</p>
              </li>
            )
          })}
        </ol>
      }
    </div>
  );
}