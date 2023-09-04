import { useEffect, useState } from "react";
import { Site } from "@/entities/site/model/site.types.ts";
import { SiteCard } from "@/entities/site/ui/site-card";
import cls from "./sites-list.module.scss";
import { SortType } from "@/features/sort";
import { sortSites } from "@/widgets/sites-list/lib/sortSites.ts";

const sites: Site[] = [
  { id: "1", bg: "gray", name: "First", authorId: "1", create: Date.now() - 500 },
  { id: "2", bg: "darkgreen", name: "Second", authorId: "1", create: Date.now() - 400 },
  { id: "3", bg: "blueviolet", name: "Site 3", authorId: "2", create: Date.now() - 300 },
  { id: "4", bg: "tomato", name: "Site 4", authorId: "2", create: Date.now() - 200 },
  { id: "5", bg: "teal", name: "Site 5", authorId: "3", create: Date.now() - 100 },
  { id: "6", bg: "forestgreen", name: "Site 6", authorId: "3", create: Date.now() },
];

interface SitesListProps {
  search: string;
  sort: SortType;
}
export const SitesList = ({ search, sort }: SitesListProps) => {
  const [searched, setSearched] = useState([...sites]);
  const [sorted, setSorted] = useState(sortSites(sort, searched));

  useEffect(() => {
    setSearched([...sites].filter(site => site.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  useEffect(() => {
    setSorted(sortSites(sort, searched));
  }, [sort, searched]);

  return (
    <div className={cls.sites_list}>
      <div className={cls.sites_list_container}>
        {sorted.length ? (
          sorted.map(site => (
            <div key={site.id} className={cls.sites_list_item}>
              <SiteCard site={site} />
            </div>
          ))
        ) : (
          <h3 className={cls.sites_list_not_sites_title}>Сайты не найдены</h3>
        )}
      </div>
    </div>
  );
};
