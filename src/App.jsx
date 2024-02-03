import React from "react";
import HorizontalGraph from "./components/HorizontalGraph";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <h1>Horizontal Graph</h1>
      <HorizontalGraph />
      <h1 style={{ marginTop: "30px" }}>Table</h1>
      <Table />
    </div>
  );
};

export default App;
