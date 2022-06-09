//components/TodoList.js

import React from "react";

import Button from "react-bootstrap/Button";

const TodoLists = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, firstName, lastName, email, phoneNumber, company } = todoInfos;

  return (
    <li key={_id}>
      <div>
        <h2>First Name</h2>
        <p>{firstName}</p>
        <h2>Last Name</h2>
        <p>{lastName}</p>
        <h2>Email</h2>
        <p>{email}</p>
        <h2>Phone Number</h2>
        <p>{phoneNumber}</p>
        <h2>Company</h2>
        <p>{company}</p>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          style={{ margin: "1rem 1rem" }}
          name={_id}
          onClick={editHandler}
        >
          Edit
        </Button>
        <Button
          style={{ margin: "1rem 1rem" }}
          name={_id}
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoLists;
