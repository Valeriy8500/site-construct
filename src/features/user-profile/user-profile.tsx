import cls from "./user-profile.module.scss";
import UserProfileIcon from '../../shared/assets/user_profile_icon.png';
import { FaRegEdit } from "react-icons/fa";

export const UserProfile = () => {
  return (
    <div className={cls['user-profile']}>
      <div className={cls['container']}>
        <button><FaRegEdit /></button>
        <img src={UserProfileIcon} alt="icon" />
      </div>
    </div>
  )
};
