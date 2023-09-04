type errCode = {
  [key: string]: string;
};
export const errorLoginCodes: errCode = {
  INVALID_EMAIL: "Некорректный Email",
  EMAIL_NOT_FOUND: "Email не найден",
  INVALID_PASSWORD: "Неверный пароль",
  EMPTY_EMAIL: "Поле email не должно быть пустым!",
  EMPTY_PASSWORD: "Поле пароля не должно быть пустым!",
  TOO_MANY_ATTEMPTS_TRY_LATER: "Ошибка! Повторите позже.",
};

export const errorRegisterCodes: errCode = {
  EMAIL_EXISTS: "Email существует",
  WEAK_PASSWORD: "Пароль должен быть не менее 6 символов",
  TOO_MANY_ATTEMPTS_TRY_LATER: "Ошибка! Повторите позже",
};
