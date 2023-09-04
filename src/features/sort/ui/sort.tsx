import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import cls from "./sort.module.scss";
import { SortType } from "@/features/sort";
import { Dropdown } from "@/shared/ui/dropdown";
import { SortIcon } from "@/shared/icons/sort-icon.tsx";
import { Button } from "@/shared/ui/button";

interface SortProps {
  sort: SortType;
  onSetSort: (value: SortType) => void;
}
export const Sort = ({ sort, onSetSort }: SortProps) => {
  const [isOpen, setOpen] = useState(false);
  const iconRef = useRef<HTMLButtonElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSetSort(e.target.value as SortType);
    setTimeout(() => setOpen(false), 500);
  };

  return (
    <div className={cls.sort}>
      <Button
        className={clsx(cls.sort__icon, isOpen && cls.sort__icon_active)}
        onClick={() => setOpen(!isOpen)}
      >
        <SortIcon />
      </Button>
      <Dropdown isOpen={isOpen} iconRef={iconRef} handleClick={() => setOpen(false)}>
        <div className={cls.sort_list}>
          <div className={cls.sort_list_item}>
            <input
              type="radio"
              name="sort"
              onChange={handleChange}
              id="sort-1"
              value={"NAME.ASK"}
              checked={sort === "NAME.ASK"}
            />
            <label htmlFor="sort-1">a-z</label>
          </div>
          <div className={cls.sort_list_item}>
            <input
              type="radio"
              name="sort"
              onChange={handleChange}
              id="sort-2"
              value={"NAME.DESC"}
              checked={sort === "NAME.DESC"}
            />
            <label htmlFor="sort-2">z-a</label>
          </div>
          <div className={cls.sort_list_item}>
            <input
              type="radio"
              name="sort"
              onChange={handleChange}
              id="sort-3"
              value={"DATE.ASK"}
              checked={sort === "DATE.ASK"}
            />
            <label htmlFor="sort-3">Сначала новые</label>
          </div>
          <div className={cls.sort_list_item}>
            <input
              type="radio"
              name="sort"
              onChange={handleChange}
              id="sort-4"
              value={"DATE.DESC"}
              checked={sort === "DATE.DESC"}
            />
            <label htmlFor="sort-4">Сначала старые</label>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};
