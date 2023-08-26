import { NavLink } from "react-router-dom";
import cls from "./navbar.module.scss";

interface INavItem {
  id: number;
  title: string;
  link: string;
}

const navItems: INavItem[] = [
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "Новый сайт", link: "/sites/new" },
];

export const Navbar = () => {
  return (
    <ul className={cls.navbar__list}>
      {navItems.map(item => (
        <li key={item.id} className={cls.navbar__item}>
          <NavLink
            to={item.link}
            className={({ isActive }) => (isActive ? cls.navbar__link_active : cls.navbar__link)}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
