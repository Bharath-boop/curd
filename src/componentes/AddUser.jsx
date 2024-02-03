import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddUser({ user, setUser }) {
  let [name, setName] = useState("");
  let [dis, setDis] = useState("");
  let navigate = useNavigate();

  const handCreate = () => {
    let id = user.length ? user[user.length - 1].id + 1 : 1;
    let newArrary = [...user];
    let status = false;
    newArrary.push({
      id,
      name,
      dis,
      status,
    });
    setUser(newArrary);
    navigate("/home");
  };

  return (
    <>
      <div className="title">
        <h1>Add-User</h1>
      </div>
      <div className="container" id="form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Todo Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Todo Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Discrption</Form.Label>
            <Form.Control
              type="text"
              placeholder="Discription"
              onChange={(e) => setDis(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => handCreate()}>
            ADD TODO
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddUser;
