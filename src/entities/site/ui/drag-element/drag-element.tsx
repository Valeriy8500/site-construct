import { JSX } from "react";

interface DragElementProps {
  children?: JSX.Element;
  dataId: string;
}

export const DragElement = ({ children, dataId }: DragElementProps) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).classList.add("drag");
    console.log("dataId", dataId);

    // setItem(e.target);
    // const el =
  };

  return (
    <div draggable={true} onDragStart={dragStart} data-id={dataId}>
      {children}
    </div>
  );
};
