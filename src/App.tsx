import React from "react";
import "./App.css";
import { ICell } from "./Figth/Cell";
import { Table } from "./Figth/Table";
import { shuffle } from "./utils/helpers";
import { allRooms } from "./utils/roomsBase1";

const generateDungeon = (): ICell[][] => {
  const newRooms = [];
  const randomRooms = shuffle(allRooms).slice(0, 10);

  for (let i = 0; i < randomRooms.length; i++) {
    const newRoom = randomRooms[i].concat([[{ type: "connect" }]]);

    if (i === randomRooms.length - 1) {
      newRooms.push(randomRooms[i]);
    } else {
      newRooms.push(newRoom);
    }
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
