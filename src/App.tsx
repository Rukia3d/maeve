import { debug } from "console";
import React from "react";
import "./App.css";
import { ICell } from "./Figth/Cell";
import { Room, Table } from "./Figth/Table";
import { generateInt, shuffle } from "./utils/helpers";
import { allRooms } from "./utils/roomsBase1";
const maxRoomNumber = 10;

interface IConnection {
  from: number;
  to: number;
}
const generateDungeon = (): Room[] => {
  const randomRooms = shuffle(allRooms).slice(0, maxRoomNumber);
  return randomRooms;
};

const generateConnections = (rooms: Room[]): IConnection[] => {
  const connections = [{ from: 0, to: 1 }];
  while (true) {
    const unconnected = findUnconnected(connections);
    if (unconnected.length === 0) {
      break;
    }
    const randomRoom1 = unconnected[generateInt(unconnected.length)];
    let randomRoom2 = generateInt(maxRoomNumber);
    while (
      randomRoom1 === randomRoom2 ||
      connections.find((c) => c.from === randomRoom1 && c.to === randomRoom2)
    ) {
      randomRoom2 = generateInt(maxRoomNumber);
    }
    connections.push({ from: randomRoom1, to: randomRoom2 });
  }
  return connections;
};

const findUnconnected = (connections: IConnection[]): number[] => {
  // setup
  const visited: number[] = [];
  const toVisit: number[] = [0];

  // search step
  do {
    const nextRoom = toVisit.pop();
    if (nextRoom === undefined) {
      break;
    }
    visited.push(nextRoom);
    const nextRooms: number[] = connectedRooms(nextRoom, connections);
    const newRooms = nextRooms.filter((n) => !visited.includes(n));
    toVisit.push(...newRooms);
  } while (toVisit.length > 0);
  const unconnected = [];
  for (let i = 0; i < maxRoomNumber; i++) {
    if (!visited.includes(i)) {
      unconnected.push(i);
    }
  }

  return unconnected;
};

const connectedRooms = (room: number, connections: IConnection[]): number[] => {
  const rooms: number[] = [];
  for (const connection of connections) {
    if (connection.from === room && !rooms.includes(connection.to)) {
      rooms.push(connection.to);
    }
    if (connection.to === room && !rooms.includes(connection.from)) {
      rooms.push(connection.from);
    }
  }
  return rooms;
};

export const Debug = ({ data }: { data: IConnection[] }) => {
  return (
    <div>
      {data.map((d: IConnection, i: number) => (
        <p key={i}>{`from ${d.from} to ${d.to}`}</p>
      ))}
    </div>
  );
};

function App() {
  const rooms = generateDungeon();
  const coonections = generateConnections(rooms);
  console.log("Rooms", rooms.length, rooms);
  console.log("Connections", coonections.length);
  return (
    <div className="App">
      <Debug data={coonections} />
      <Table data={rooms.flat()} />
    </div>
  );
}

export default App;
