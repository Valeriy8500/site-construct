import { Navbar } from "./navbar";
import { UserButton } from "./user-button";
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
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};
