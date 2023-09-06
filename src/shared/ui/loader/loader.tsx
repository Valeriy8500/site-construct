import cls from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={cls.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
