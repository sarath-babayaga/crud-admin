import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          {/* <h1>hello</h1> */}
          <Routes>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" element={<Home/>} />
            <Route path="/add" element={<AddUser/>} />
            <Route path="/edit/:id" element={<EditUser/>} />
          </Routes>
        </Router>
      </GlobalProvider>
      
    </div>
  )
}

export default App
