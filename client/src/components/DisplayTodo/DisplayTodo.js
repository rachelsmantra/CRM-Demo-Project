import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateTodo from "../UpdateTodo";
import TodoLists from "../TodoLists";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

export function DisplayTodo() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoTodo, setInfoTodo] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(
    function () {
      axios
        .get("http://localhost:4000/api/todoapp")
        .then((res) => {
          setInfoTodo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [update]
  );

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateHandler = () => {
    setUpdate(!update);
  };

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:4000/api/todoapp/${e.target.name}`);

    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  return (
    <section className="big-container">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <div>
              {" "}
              <Link to="/add-list" className="button-new">
                <Button
                  style={{ margin: "1rem 2rem" }}
                  variant="primary"
                  className="todo-btn"
                >
                  ➕ Add new{" "}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex flex-wrap justify-content-center">
        {" "}
        {infoTodo.map((todoInfo, index) => (
          <Card style={{ margin: "2rem 2rem", padding: "1rem 1rem" }}>
            <TodoLists
              key={index}
              todoInfos={todoInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          </Card>
        ))}
      </Container>

      {modal ? (
        <Modal
          show={setModal}
          onHide={closeHandler}
          className="update-container"
        >
          <Button style={{ margin: "1rem 1rem" }} onClick={closeHandler}>
            Close
          </Button>
          <Modal.Body>
            <UpdateTodo
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
}

export default DisplayTodo;
