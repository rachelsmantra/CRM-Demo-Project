// components/CreateTodo.js

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const CreateTodo = () => {
  const [todoInfo, setTodoInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
  });

  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/todoapp", todoInfo)
      .then((res) => {
        setTodoInfo({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phoneNumber: "",
        });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          {" "}
          <Button style={{ margin: "1rem 1rem" }}>back</Button>
        </Link>
      </div>

      <Container className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit} noValidate>
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={todoInfo.firstName}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={todoInfo.lastName}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={todoInfo.email}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="lastName">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={todoInfo.phoneNumber}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="company">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={todoInfo.company}
            onChange={handleChange}
            className="input"
          />
          <div
            className="d-flex justify-content-center"
            style={{ margin: "1rem 1rem" }}
          >
            <Button type="submit"> create customer</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreateTodo;
