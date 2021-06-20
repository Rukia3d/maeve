import React from "react";
import { Cell, ICell } from "./Cell";

interface IRowProps {
  index: number;
  row: ICell[];
}

export const Row = ({ index, row }: IRowProps) => {
  return (
    <tr>
      {row.map((cell: any, i: number) => (
        <Cell key={i} index={i} row={index} cell={cell} />
      ))}
    </tr>
  );
};
