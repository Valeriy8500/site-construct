import React, { useState } from "react";
import cls from "./search.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";

import { Input } from "@/shared/ui/input";
import { SearchIcon } from "@/shared/icons/search-icon";

interface SearchProps {
  placeholder: string;
  onChange: (value: string) => void;
}
export const Search = ({ placeholder, onChange }: SearchProps) => {
  const [value, setValue] = useState<string>("");
  useDebounce(() => onChange(value), 1000, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={cls.search}>
      <Input
        className={cls.search_input}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        rightIcon={<SearchIcon className={cls.search_icon} />}
      />
    </div>
  );
};
