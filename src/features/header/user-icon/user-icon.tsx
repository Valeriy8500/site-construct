import { useState, useRef } from "react";
import clsx from "clsx";
import { FaRegUser } from "react-icons/fa";
import clsx from "clsx";
import { Dropdown } from "../dropdown";
import cls from "./user-icon.module.scss";

export const UserIcon = () => {
  const [isOpen, setOpen] = useState(false);
  const iconRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={cls.user}>
      <button
        className={clsx(cls.user__icon, isOpen && cls.user__icon_active)}
        onClick={() => setOpen(!isOpen)}
        ref={iconRef}
      >
        <FaRegUser />
      </button>
      <Dropdown isOpen={isOpen} iconRef={iconRef} handleClick={() => setOpen(false)} />
    </div>
  );
};
