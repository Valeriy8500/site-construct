import { FC } from "react";
import Select, { SingleValue } from "react-select";
import { ISelectOption } from "@/features/construct-components/construct-select/types";
import cls from "./select.module.scss";

interface MySelectProps {
  options: ISelectOption[];
  onSelect: (value: SingleValue<ISelectOption>) => void;
}

export const MySelect: FC<MySelectProps> = ({ options, onSelect }) => {
  return (
    <div className={cls.select} data-testid="my-select">
      <Select options={options} classNamePrefix="my_select" onChange={onSelect} />
    </div>
  );
};
