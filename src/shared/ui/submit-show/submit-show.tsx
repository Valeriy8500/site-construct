import { FC } from "react";
import { toast } from "react-toastify";
import { FormItem } from "@/entities/construct-form";
import cls from "./submit-show.module.scss";

interface SubmitShowProps {
  form: FormItem[];
}

export const SubmitShow: FC<SubmitShowProps> = ({ form }) => {
  return (
    <ul className={cls.submit_show__list} data-testid="submit-show">
      {form.map(item => (
        <li key={item.id} className={cls.submit_show__item}>
          {toast.info(`${item.label}: ${item.value}`, { toastId: item.id })}
        </li>
      ))}
    </ul>
  );
};
