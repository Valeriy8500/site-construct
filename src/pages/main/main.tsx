import { useState } from "react";
import { SitesList } from "@/widgets/sites-list";
import { Search } from "@/features/search";
import cls from "./main.module.scss";
import { Sort, SortType } from "@/features/sort";

export const Main = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortType>("DATE.ASK");

  return (
    <div className={cls.main}>
      <div className={cls.main_filters}>
        <Search placeholder="Поиск по названию" onChange={setSearch} />
        <Sort sort={sort} onSetSort={setSort} />
      </div>
      <SitesList search={search} sort={sort} />
    </div>
  );
};
