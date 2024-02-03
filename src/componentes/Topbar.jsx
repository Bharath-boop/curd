import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Topbar({ user, setUser }) {
  let navigate = useNavigate();
  let hadleDelete = (id) => {
    let index = 0;
    for (let i = 0; i < user.length; i++) {
      if (user[i].id == id) {
        index = i;
        break;
      }
    }
    let newArrary = [...user];
    newArrary.splice(index, 1);
    setUser(newArrary);
  };
  return (
    <>
      <div className="container">
        <h3>MY TODO</h3>
      </div>
      <div className="container" id="form">
        <div className="col-auto">
          <button
            className="btn btn-info mb-3"
            onClick={() => {
              navigate("/add-user");
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="rows">
        <div className="col-auto">
          <h3>My Todos</h3>
        </div>
        <div className="col-auto">
          <h3>Filter</h3>
        </div>
      </div>
      <div className="row">
        {user.map((e) => {
          return (
            <div className="col-lg-3 g-3" key={e.id}>
              <div className="card mb-5 mb-lg-0" id="card">
                <div className="card-body">
                  <h5>Name: {e.name}</h5>
                  <h6>Discrption: {e.dis} </h6>
                  <h6>Status:</h6>
                  <select name="cars" id="cars">
                    {e.status ? (
                      <option value="Completed">completed</option>
                    ) : (
                      <option value="Not Completed">Not Completed</option>
                    )}
                  </select>

                  <div className="card-body text-end">
                    <Button
                      className="btn btn-success"
                      onClick={() => {
                        navigate(`/edit-user/${e.id}`);
                      }}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        hadleDelete(e.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Topbar;
