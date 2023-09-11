import { CSSProperties, DragEventHandler, ReactNode, useRef, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineDragIndicator, MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import cls from "./construct-block.module.scss";
import { Button } from "@/shared/ui/button";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import {
  changeSiteElementHeight,
  changeSiteElementWidth,
  deleteSiteElement,
} from "@/entities/site/model/site.selectors.ts";

interface ConstructBlockProps {
  children?: ReactNode;
  style?: CSSProperties;
  id: string;
}

export const ConstructBlock = ({ children, style, id }: ConstructBlockProps) => {
  const dispatch = useAppDispatch();
  const [isEdit, setEdit] = useState<boolean>(true);
  const widthRef = useRef(0);
  const heightRef = useRef(0);

  const handleEdit = () => {
    setEdit(prev => !prev);
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

  return (
    <div
      className={`${cls.construct_block} ${isEdit ? cls.construct_block_edit : ""}`}
      style={style}
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
            <MdOutlineDragIndicator />
          </Button>
          <Button
            className={`${cls.construct_block_button} ${cls.height}`}
            draggable={isEdit}
            onDragStart={handleHeightDragStart}
            onDragEnd={handleHeightDragEnd}
          >
            <MdOutlineDragIndicator />
          </Button>
        </>
      )}
    </div>
  );
};
