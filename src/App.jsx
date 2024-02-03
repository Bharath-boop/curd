import React from "react";
import { useState } from "react";
import Topbar from "./componentes/Topbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Edit_user from "./componentes/Edit_user";
import AddUser from "./componentes/AddUser";
function App() {
  let [user, setUser] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Topbar user={user} setUser={setUser} />}
        />
        <Route
          path="/add-user"
          element={<AddUser user={user} setUser={setUser} />}
        />
        <Route
          path="/edit-user/:id"
          element={<Edit_user user={user} setUser={setUser} />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
