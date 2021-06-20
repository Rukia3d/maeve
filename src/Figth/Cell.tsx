import React from "react";

interface ICellProps {
  index: number;
  row: number;
  cell: ICell;
}

export interface ICell {
  type: "open" | "connect" | "rock" | "debree";
}

const backgound = (type: string) => {
  switch (type) {
    case "open":
      return "white";
    case "connect":
      return "yellow";
    case "debree":
      return "lightgrey";
    default:
      return "grey";
  }
};

export const Cell = ({ index, row, cell }: ICellProps) => {
  const style = {
    position: "relative" as "relative",
    border: "1px solid black",
    backgroundColor: backgound(cell.type),
    width: "25px",
    height: "25px",
  };
  return (
    <td style={style} data-testid={"fightCell"}>
      <span
        style={{
          position: "absolute" as "absolute",
          top: 0,
          left: 0,
          fontSize: "50%",
        }}
      >{`${index}X${row}`}</span>
    </td>
  );
};
