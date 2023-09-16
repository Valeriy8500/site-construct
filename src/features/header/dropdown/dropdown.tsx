import { FC, RefObject, useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PiUserSquareBold } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { useClickOutside } from "@/shared/hooks/use-click-outside";
import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { userLogout } from "@/entities/user/model/user.selectors";
import cls from "./dropdown.module.scss";
import { RiLockPasswordLine } from "react-icons/ri";

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
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLElement>(null);

  useClickOutside(iconRef, navRef, () => handleClick());

  const handleProfile = () => {
    navigate("/me");
    handleClick();
  };

  const handleChangePassword = () => {
    navigate("/password");
    handleClick();
  };

  const handleLogOut = () => {
    dispatch(userLogout());
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
        <li className={cls.dropdown__item} onClick={handleChangePassword}>
          <span>
            <RiLockPasswordLine />
          </span>
          <span>Сменить пароль</span>
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
