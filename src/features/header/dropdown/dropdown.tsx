import { FC, RefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PiUserSquareBold } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import clsx from "clsx";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import cls from "./dropdown.module.scss";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "10%" },
};

interface DropdownProps {
  isOpen: boolean;
  iconRef: RefObject<HTMLButtonElement>;
  handleClick: () => void;
}

export const Dropdown: FC<DropdownProps> = ({ isOpen, iconRef, handleClick }) => {
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useClickOutside(iconRef, navRef, () => handleClick());

  const handleProfile = () => {
    navigate("/me");
    handleClick();
  };

  const handleLogOut = () => {
    // TODO: dispatch('обнулить данные о пользователе в redux')
    navigate("/login", { replace: true });
    handleClick();
  };

  return (
    <motion.nav
      className={clsx(cls.dropdown, isOpen && cls.dropdown_active)}
      ref={navRef}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      <ul className={cls.dropdown__list}>
        <li className={cls.dropdown__item} onClick={handleProfile}>
          <span>
            <PiUserSquareBold />
          </span>
          <span>Профиль</span>
        </li>
        <li className={cls.dropdown__item} onClick={handleLogOut}>
          <span>
            <MdOutlineLogout />
          </span>
          <span>Выход</span>
        </li>
      </ul>
    </motion.nav>
  );
};
