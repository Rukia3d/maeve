//@ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const uniqueArray = (arrArg: any[]) =>
  arrArg.filter(
    (elem: any, pos: number, arr: any) => arr.indexOf(elem) === pos
  );

export const uniqueItem = (arr: any, item: any) => {
  return arr.indexOf(item) === -1;
};

export const itemIndex = (arr: any, item: any) => {
  return arr.indexOf(item);
};

export const generateInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

export const shuffle = (array: any) => array.sort(() => Math.random() - 0.5);

export const existsInRoom = (
  actors: any,
  { x, y }: { x: number; y: number }
) => {
  const result = actors.some(
    (c: any) => c.position.x === x && c.position.y === y
  );
  return result;
};
