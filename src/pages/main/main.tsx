import { SitesList } from "@/widgets/sites-list";
import { Search } from "@/features/search";
import cls from "./main.module.scss";
import { Sort } from "@/features/sort";

export const Main = () => {
  return (
    <div className={cls.main}>
      <div className={cls.main_filters}>
        <Search placeholder="Поиск по названию" />
        <Sort />
      </div>
      <SitesList />
    </div>
  );
};
