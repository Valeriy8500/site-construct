import { Navbar } from "./navbar";
import { UserIcon } from "./user-icon";
import cls from "./header.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.header__container}>
        <div className={cls.header__body}>
          <div className={cls.header__navbar}>
            <Navbar />
          </div>
          <div className={cls.header__userIcon}>
            <UserIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
