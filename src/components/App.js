import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchForFlights from "./SearchForFlights";
import ShowPage from "./ShowPage";
import Admin from "./Admin";

function App() {
  return (
    <div className="App">
      <div>
        <h1>AHJ Airlines</h1>
        <img src="https://i.imgur.com/r9kU053.png" className="imgmover" />
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarNav"
        >
          <div className="col-md-11"></div>
          <ul className="navbar-nav mb-2 mb-lg-0 col-md-5">
            <div className="navbar-nav mb-2 mb-lg-0 buttonmover">
              <li className="nav-item">
                <Link to="/">
                  <button className="menubar nav-item Button">User</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/">
                  <button className="menubar nav-item Button">Admin</button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      {/* Parent Component */}
      <Routes>
        <Route exact path="/" element={<SearchForFlights />} />
        <Route path="/flights/:flightId/showpage" element={<ShowPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
