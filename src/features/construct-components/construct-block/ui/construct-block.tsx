import { CSSProperties, DragEventHandler, ReactNode, useRef } from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowsAltH, FaArrowsAltV } from "react-icons/fa";
import cls from "./construct-block.module.scss";
import { Button } from "@/shared/ui/button";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import {
  changeSiteElementHeight,
  changeSiteElementPosition,
  changeSiteElementWidth,
  deleteSiteElement,
} from "@/entities/site/model/site.selectors.ts";

interface ConstructBlockProps {
  children?: ReactNode;
  style?: CSSProperties;
  id: string;
  current: string;
  onCurrent: (id: string) => void;
}

export const ConstructBlock = ({
  children,
  style,
  id,
  current,
  onCurrent,
}: ConstructBlockProps) => {
  const dispatch = useAppDispatch();
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const positionRef = useRef({ top: 0, left: 0 });

  const isEdit = current === id;

  const handleEdit = () => {
    onCurrent(current === id ? "" : id);
  };

  const handleDelete = () => {
    dispatch(deleteSiteElement(id));
  };

  const handleWidthDragStart: DragEventHandler<HTMLButtonElement> | undefined = e => {
    widthRef.current = e.clientX;
  };

  const handleWidthDragEnd: DragEventHandler<HTMLButtonElement> | undefined = e => {
    dispatch(changeSiteElementWidth(id, e.clientX - widthRef.current));
  };

  const handleHeightDragStart: DragEventHandler<HTMLButtonElement> | undefined = e => {
    heightRef.current = e.clientY;
  };

  const handleHeightDragEnd: DragEventHandler<HTMLButtonElement> | undefined = e => {
    dispatch(changeSiteElementHeight(id, e.clientY - heightRef.current));
  };

  const handlePositionDragStart: DragEventHandler<HTMLDivElement> | undefined = e => {
    positionRef.current.top = e.clientY;
    positionRef.current.left = e.clientX;
  };

  const handlePositionDragEnd: DragEventHandler<HTMLDivElement> | undefined = e => {
    dispatch(
      changeSiteElementPosition(id, {
        top: e.clientY - positionRef.current.top,
        left: e.clientX - positionRef.current.left,
      })
    );
  };

  return (
    <div
      className={`${cls.construct_block} ${isEdit ? cls.construct_block_edit : ""}`}
      style={{ ...style, zIndex: isEdit ? 10 : 1 }}
      draggable={isEdit}
      onDragStart={handlePositionDragStart}
      onDragEnd={handlePositionDragEnd}
    >
      {children}
      <Button className={`${cls.construct_block_button} ${cls.edit}`} onClick={handleEdit}>
        {isEdit ? <BsCheck2 /> : <MdOutlineModeEditOutline />}
      </Button>
      {isEdit && (
        <>
          <Button className={`${cls.construct_block_button} ${cls.delete}`} onClick={handleDelete}>
            <RiDeleteBin5Line />
          </Button>
          <Button
            className={`${cls.construct_block_button} ${cls.width}`}
            draggable={isEdit}
            onDragStart={handleWidthDragStart}
            onDragEnd={handleWidthDragEnd}
          >
            <FaArrowsAltH />
          </Button>
          <Button
            className={`${cls.construct_block_button} ${cls.height}`}
            draggable={isEdit}
            onDragStart={handleHeightDragStart}
            onDragEnd={handleHeightDragEnd}
          >
            <FaArrowsAltV />
          </Button>
        </>
      )}
    </div>
  );
};
