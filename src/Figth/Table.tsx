import React from "react";
import { ICell } from "./Cell";
import { Row } from "./Row";
export type Room = ICell[][];

interface ITableProps {
  data: Room;
}

export const Table = ({ data }: ITableProps) => {
  return (
    <table style={{ marginBottom: "50px" }}>
      <tbody>
        {data.map((row: any, i: number) => (
          <Row key={i} index={i} row={row} />
        ))}
      </tbody>
    </table>
  );
};
