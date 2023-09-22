import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import cls from "./search.module.scss";
import { useDebounce } from "@/shared/hooks/use-debounce";

import { Input } from "@/shared/ui/input";
import { SearchIcon } from "@/shared/icons/search-icon";

interface SearchProps {
  placeholder: string;
}
export const Search = ({ placeholder }: SearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [value, setValue] = useState<string>(search);
  const handleSetSearch = (value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  useDebounce(() => handleSetSearch(value), 1000, [value]);

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
