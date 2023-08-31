import { useState } from "react";
import { FaRegEdit , FaCheckCircle } from "react-icons/fa";
import UserProfileIcon from "../../shared/assets/user_profile_icon.png";
import cls from "./user-profile.module.scss";
import { objForTest } from "../../app/data/data";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export const UserProfile = () => {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [error, setError] = useState<any>({}); // Todo: any

  // const formValidator = (data: any) => {
  //   const error: any = {
  //     name: { message: "" },
  //     lastname: { message: "" },
  //     email: { message: "" },
  //     password: { message: "" },
  //     confirmPassword: { message: "" },
  //   };

  //   const { name, lastname, email, password, confirmPassword } = data;

  //   if (name === "") error.name.message = "Empty name";
  //   if (lastname === "") error.lastname.message = "Empty lastname";
  //   if (email === "") error.email.message = "Empty email";
  //   if (password === "") error.password.message = "Empty password";
  //   if (confirmPassword === "") error.confirmPassword.message = "Empty confirm password";

  //   if (password !== confirmPassword) error.confirmPassword.message = "Password mismatch";
  //   if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) error.email.message = "Email not valid";

  //   for (const key of Object.keys(error)) {
  //     if (error[key].message !== "") return error;
  //   }

  //   return {};
  // };

  return (
    <div className={cls.profile}>
      <div className={cls.profile__container}>
        <button className={cls[`profile__btn-container`]} onClick={() => setOnEdit(prev => !prev)}>
          {onEdit ? (
            <FaCheckCircle className={cls[`profile__check-btn`]} />
          ) : (
            <FaRegEdit className={cls[`profile__edit-btn`]} />
          )}
        </button>
        <img src={UserProfileIcon} className={cls.profile__img} alt="icon" />
        {onEdit ? (
          <form className={cls[`profile__enable-form-container`]}>
            <div className={cls[`profile__input-container`]}>
              <Label forValue="form_name" label="Name" />
              <Input
                // error={error.name && error.name.message}
                type="text"
                id="form_name"
                name="name"
                defaultValue=""
                onChange={() => void 0}
                placeholder="Name"
              />
            </div>
            <div className={cls[`profile__input-container`]}>
              <Label forValue="form_lastname" label="Lastname" />
              <Input
                // error={error.lastname && error.lastname.message}
                type="text"
                id="form_lastname"
                name="lastname"
                defaultValue=""
                onChange={() => void 0}
                placeholder="Lastname"
              />
            </div>
            <div className={cls[`profile__input-container`]}>
              <Label forValue="form_email" label="Email" />
              <Input
                // error={error.email && error.email.message}
                type="email"
                id="form_email"
                name="email"
                defaultValue=""
                onChange={() => void 0}
                placeholder="Email"
              />
            </div>
          </form>
        ) : (
          <div className={cls[`profile__disabled-user-data-container`]}>
            <span className={cls[`profile__disabled-user-data`]}>
              {`${objForTest.name} ${objForTest.surname}`}
            </span>
            <span className={cls[`profile__disabled-user-data`]}>{objForTest.email}</span>
          </div>
        )}
      </div>
    </div>
  );
};
