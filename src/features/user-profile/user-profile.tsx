import React, { useState } from "react";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import UserProfileIcon from "../../shared/assets/user_profile_icon.png";
import cls from "./user-profile.module.scss";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useUpdateProfileMutation } from "@/entities/user/api/user.api";
import { useValidateProfile } from "./hooks/useValidateProfile";

export interface IInputValue {
  name: string;
  lastname: string;
  email: string;
}

export type IErrorData = {
  [P in IInputValue[keyof IInputValue]]: {
    message: string;
  };
};

export const UserProfile = () => {
  const [update] = useUpdateProfileMutation();
  const idToken = localStorage.getItem("accessToken")!;

  const logProfileData: IInputValue = {
    name: localStorage.getItem("fullName")!.split(" ")[0],
    lastname: localStorage.getItem("fullName")!.split(" ")[1],
    email: localStorage.getItem("email")!,
  };

  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [error, setError] = useState<IErrorData>({});
  const [inputValue, setInputValue] = useState<IInputValue>({
    name: logProfileData.name,
    lastname: logProfileData.lastname,
    email: logProfileData.email,
  });

  const onUpdateProfile = async (): Promise<void> => {
    if (!onEdit) {
      setOnEdit(prev => !prev);
    } else {
      setOnEdit(prev => !prev);
      const email = inputValue.email;
      const displayName = `${inputValue.name} ${inputValue.lastname}`;

      await update({ email, idToken, displayName, returnSecureToken: true });
    }
  };

  const OnChange = (e: React.ChangeEvent) => {
    const element = e.target as HTMLInputElement;

    const inputsData = {
      ...inputValue,
      [element.name]: element.value,
    };

    const validate = useValidateProfile(inputsData);
    setError(validate);

    setInputValue(prev => ({
      ...prev,
      [element.name]: element.value,
    }));
  };

  return (
    <div className={cls.profile}>
      <div className={cls.profile__container}>
        <button
          className={cls[`profile__btn_container`]}
          onClick={() => onUpdateProfile()}
          disabled={Object.keys(error).length !== 0 ? true : false}
          style={Object.keys(error).length !== 0 ? { opacity: "0.2", cursor: "auto" } : undefined}
        >
          {onEdit ? (
            <FaCheckCircle title="Отправить" className={cls[`profile__check_btn`]} />
          ) : (
            <FaRegEdit title="Редактировать" className={cls[`profile__edit_btn`]} />
          )}
        </button>
        <img src={UserProfileIcon} className={cls.profile__img} alt="icon" />
        {onEdit ? (
          <form className={cls[`profile__enable_form_container`]}>
            <div className={cls[`profile__input_container`]}>
              <Label forValue="form_name" label="Name" />
              <Input
                error={error.name && error.name.message}
                type="text"
                id="form_name"
                name="name"
                onChange={e => OnChange(e)}
                value={inputValue.name}
                placeholder="Name"
              />
            </div>
            <div className={cls[`profile__input_container`]}>
              <Label forValue="form_lastname" label="Lastname" />
              <Input
                error={error.lastname && error.lastname.message}
                type="text"
                id="form_lastname"
                name="lastname"
                onChange={e => OnChange(e)}
                value={inputValue.lastname}
                placeholder="Lastname"
              />
            </div>
            <div className={cls[`profile__input_container`]}>
              <Label forValue="form_email" label="Email" />
              <Input
                error={error.email && error.email.message}
                type="email"
                id="form_email"
                name="email"
                onChange={e => OnChange(e)}
                value={inputValue.email}
                placeholder="Email"
              />
            </div>
          </form>
        ) : (
          <div className={cls[`profile__disabled_user_data_container`]}>
            <span className={cls[`profile__disabled_user_data`]}>
              {`${logProfileData.name} ${logProfileData.lastname}`}
            </span>
            <span className={cls[`profile__disabled-user-data`]}>{logProfileData.email}</span>
          </div>
        )}
      </div>
    </div>
  );
};
