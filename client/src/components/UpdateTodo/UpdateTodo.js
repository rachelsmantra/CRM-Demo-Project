//components/UpdateTodo.js

import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "bootstrap";

function UpdateTodo({ _id, closeHandler, updateHandler }) {
  const [todoInfo, setTodoInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
  });

  const handleChange = (e) => {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/todoapp/${_id}`, todoInfo)
      .then((res) => {
        setTodoInfo({ title: "", description: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        submitHanlder(e);
        updateHandler();
        closeHandler();
      }}
    >
      <Form.Group>
        <Form.Label htmlFor="firstName">First Name</Form.Label>
        <Form.Control type="text" name="firstName" onChange={handleChange} />
        <Form.Label htmlFor="lastName">Last Name</Form.Label>
        <Form.Control type="text" name="lastName" onChange={handleChange} />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
        <Form.Control type="text" name="phoneNumber" onChange={handleChange} />
        <Form.Label htmlFor="company" className="label">
          Company
        </Form.Label>
        <Form.Control type="text" name="company" onChange={handleChange} />
      </Form.Group>
      <Button type="submit" style={{ margin: "1rem 1rem" }}>
        Edit
      </Button>
    </Form>
  );
}
export default UpdateTodo;
