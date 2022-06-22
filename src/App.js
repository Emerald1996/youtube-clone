import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import Login from "./Components/Login";
import { UserAuth } from "./Context/AuthContext";
function App() {
  const { user } = UserAuth();
  return (
    <>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Search/:searchResult" element={<Search />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
