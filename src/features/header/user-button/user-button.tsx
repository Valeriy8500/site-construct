import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cls from "./user-button.module.scss";

// Компонент-заглушка
// TODO: Изменить кнопку и добавить функционал выпадающего меню
export const UserButton = () => {
  const navigate = useNavigate();
  return (
    <button className={cls.user_button} onClick={() => navigate("/me")}>
      <FaRegUser />
    </button>
  );
};
