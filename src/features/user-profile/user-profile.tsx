import React, { ReactElement, useState } from "react";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import UserProfileIcon from "../../shared/assets/user_profile_icon.png";
import cls from "./user-profile.module.scss";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useUpdateProfileMutation } from "@/entities/user/api";
import { useValidateProfile } from "./hooks/useValidateProfile";
import { useAppSelector } from "@/shared/hooks/redux-hooks";
import { getUser } from "@/entities/user/model/user.selectors";
import { toast } from "react-toastify";
import { ErrorType } from "@/entities/user";

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

export const UserProfile = (): ReactElement => {
  const [update] = useUpdateProfileMutation();
  const user = useAppSelector(getUser);

  const { accessToken: idToken } = user;

  const userName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");

  const logProfileData: IInputValue = {
    name: userName!.split(" ")[0],
    lastname: userName!.split(" ")[1],
    email: email!,
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

      const updateProfile = await update({ email, idToken, displayName, returnSecureToken: true });

      if ("error" in updateProfile) {
        const err = updateProfile.error as ErrorType;
        toast.error(`Ошибка! code: ${err.data.error.code}, message: ${err.data.error.message}`);
      }
    }
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };

    const validate = useValidateProfile(inputsData);
    setError(validate);

    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={cls.profile}>
      <div className={cls.profile__container}>
        <button
          className={cls[`profile__btn_container`]}
          onClick={() => onUpdateProfile()}
          disabled={Object.keys(error).length !== 0}
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
              <Label
                forValue="form_name"
                label="Name"
                className={cls[`profile__input_container_label`]}
              />
              <Input
                error={error.name && error.name.message}
                type="text"
                id="form_name"
                name="name"
                onChange={e => OnChange(e)}
                value={inputValue.name}
                placeholder="Name"
                style={{ color: "black", width: "100%" }}
              />
            </div>
            <div className={cls[`profile__input_container`]}>
              <Label
                forValue="form_lastname"
                label="Lastname"
                className={cls[`profile__input_container_label`]}
              />
              <Input
                error={error.lastname && error.lastname.message}
                type="text"
                id="form_lastname"
                name="lastname"
                onChange={e => OnChange(e)}
                value={inputValue.lastname}
                placeholder="Lastname"
                style={{ color: "black", width: "100%" }}
              />
            </div>
            <div className={cls[`profile__input_container`]}>
              <Label
                forValue="form_email"
                label="Email"
                className={cls[`profile__input_container_label`]}
              />
              <Input
                error={error.email && error.email.message}
                type="email"
                id="form_email"
                name="email"
                onChange={e => OnChange(e)}
                value={inputValue.email}
                placeholder="Email"
                style={{ color: "black", width: "100%" }}
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
