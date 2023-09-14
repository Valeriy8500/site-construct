import { FC } from "react";
import Select from "react-select";
import { ISelectOption } from "@/features/construct-components/construct-select/types";
import cls from "./select.module.scss";

interface MySelectProps {
  options: ISelectOption[];
}

export const MySelect: FC<MySelectProps> = ({ options }) => {
  return (
    <div className={cls.select} data-testid="my-select">
      <Select options={options} classNamePrefix="my_select" />
    </div>
  );
};
