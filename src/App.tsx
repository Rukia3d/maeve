import React from "react";
import "./App.css";
import { ICell } from "./Figth/Cell";
import { Table } from "./Figth/Table";
import { allRooms } from "./utils/roomsBase1";

const generateDungeon = (): ICell[][] => {
  const newRooms = [];
  for (let i = 0; i < allRooms.length; i++) {
    const newRoom = allRooms[i].concat([[{ type: "connect" }]]);
    newRooms.push(newRoom);
  }
  return newRooms.flat();
};

function App() {
  const data = generateDungeon();
  console.log(data);
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
