import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Edit_user({ user, setUser }) {
  let params = useParams();

  let [name, setName] = useState("");
  let [dis, setDis] = useState("");
  let navigate = useNavigate();

  const findIndex = (id) => {
    for (let i = 0; i < user.length; i++) {
      if (id === user[i].id) return i;
    }
  };

  const handEdit = () => {
    let id = Number(params.id);
    let index = findIndex(id);
    let newArrary = [...user];
    let status = "Not completed";
    newArrary.splice(index, 1, {
      id,
      name,
      dis,
      status,
    });
    setUser(newArrary);
    navigate("/home");
  };

  let getUserData = () => {
    let id = Number(params.id);
    let index = findIndex(id);
    setName(user[index].name);
    setDis(user[index].dis);
  };
  useEffect(() => {
    getUserData();
  }, []);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Discrption</Form.Label>
            <Form.Control
              type="text"
              placeholder="Discription"
              value={dis}
              onChange={(e) => setDis(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => handEdit()}>
            ADD TODO
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Edit_user;
