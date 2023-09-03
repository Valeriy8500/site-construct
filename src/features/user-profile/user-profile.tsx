import React, { useState } from "react";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import UserProfileIcon from "../../shared/assets/user_profile_icon.png";
import cls from "./user-profile.module.scss";
import { objForTest } from "../../app/data/data";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

interface IInputValue {
  name: string;
  lastname: string;
  email: string;
}

type IErrorData = {
  [P in IInputValue[keyof IInputValue]]: {
    message: string;
  };
};

export const UserProfile = () => {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [error, setError] = useState<IErrorData>({});
  const [inputValue, setInputValue] = useState<IInputValue>({
    name: 'Иван',
    lastname: 'Иванович',
    email: 'Иван@mail.ru'
  });

  const onChange = (e: React.ChangeEvent) => {
    const element = e.target as HTMLInputElement;

    const inputsData = {
      ...inputValue,
      [element.name]: element.value
    };

    const validate = inputsValidation(inputsData);
    setError(validate);

    setInputValue((prev) => ({
      ...prev,
      [element.name]: element.value
    }));
  };

  const inputsValidation = (data: IInputValue) => {
    const error: IErrorData = {
      name: { message: "" },
      lastname: { message: "" },
      email: { message: "" }
    };

    if (data.name === "") error.name.message = "Поле не должно быть пустым";
    if (data.lastname === "") error.lastname.message = "Поле не должно быть пустым";
    if (!data.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) error.email.message = "Email не валиден";

    for (const key of Object.keys(error)) {
      if (error[key].message !== "") return error;
    }

    return {};
  };

  return (
    <div className={cls.profile}>
      <div className={cls.profile__container}>
        <button
          className={cls[`profile__btn_container`]}
          onClick={() => setOnEdit(prev => !prev)}
          disabled={Object.keys(error).length !== 0 ? true : false}
          style={
            Object.keys(error).length !== 0 ?
              { opacity: "0.2", cursor: "auto" } : undefined
          }
        >
          {onEdit ? (
            <FaCheckCircle className={cls[`profile__check_btn`]}
            />
          ) : (
            <FaRegEdit className={cls[`profile__edit_btn`]} />
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
                onChange={(e) => onChange(e)}
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
                onChange={onChange}
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
                onChange={(e) => onChange(e)}
                value={inputValue.email}
                placeholder="Email"
              />
            </div>
          </form>
        ) : (
          <div className={cls[`profile__disabled_user_data_container`]}>
            <span className={cls[`profile__disabled_user_data`]}>
              {`${objForTest.name} ${objForTest.surname}`}
            </span>
            <span className={cls[`profile__disabled-user-data`]}>{objForTest.email}</span>
          </div>
        )}
      </div>
    </div>
  );
};
