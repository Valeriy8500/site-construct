import cls from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footer__container}>&copy; Team 1</div>
    </footer>
  );
};
