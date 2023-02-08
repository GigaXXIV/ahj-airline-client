import React, { useState, useEffect } from "react";
import axios from "axios";

import ShowPage from "./ShowPage";

const App = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/planes.json")
      .then((response) => {
        setPlanes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {planes.map((plane) => {
        const { id, name, rows, cols } = plane;
        return (
          <div key={id}>
            {name}: {rows} rows, {cols} columns
          </div>
        );
      })}
    </div>
  );
};

export default App;

// "app.js" in React is typically the entry file for a React application, where the React components and the logic for rendering them to the UI are defined. It typically sets up the ReactDOM and renders the root component, which serves as the container for all the other components in the application. The "app.js" file is responsible for bootstrapping the application and setting it up for the browser to run.
