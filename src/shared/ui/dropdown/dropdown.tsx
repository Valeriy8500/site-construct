import { FC, ReactNode, RefObject, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useClickOutside } from "@/shared/hooks/use-click-outside";
import cls from "./dropdown.module.scss";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "10%" },
};

interface DropdownProps {
  isOpen: boolean;
  iconRef: RefObject<HTMLButtonElement>;
  handleClick: () => void;
  children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ isOpen, iconRef, handleClick, children }) => {
  const navRef = useRef<HTMLElement>(null);
  useClickOutside(iconRef, navRef, () => handleClick());

  return (
    <motion.nav
      className={clsx(cls.dropdown, isOpen && cls.dropdown_active)}
      ref={navRef}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.nav>
  );
};
