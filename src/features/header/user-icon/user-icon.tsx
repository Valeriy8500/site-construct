import { useState, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { Dropdown } from "../dropdown";
import cls from "./user-icon.module.scss";
import clsx from "clsx";

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
