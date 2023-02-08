import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchForFlights from "./SearchForFlights";
import ShowPage from "./ShowPage";
import Admin from "./Admin";

function App() {
  return (
    <div className="App">
      <h1>AHJ Airlines</h1>
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
