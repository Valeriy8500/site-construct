import { SiteCard } from "@/entities/site/ui/site-card";
import cls from "./sites-list.module.scss";
import { SortType } from "@/features/sort";
import { useGetSitesQuery } from "@/entities/site/api/site.api.ts";
import { Loader } from "@/shared/ui/loader";
import { sortSites } from "../lib/sortSites.ts";

interface SitesListProps {
  search: string;
  sort: SortType;
}
export const SitesList = ({ search, sort }: SitesListProps) => {
  const { data, isLoading } = useGetSitesQuery();
  const searched =
    data?.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) || [];

  const sorted = sortSites(sort, searched);

  return (
    <div className={cls.sites_list}>
      <div className={cls.sites_list_container}>
        {isLoading && <Loader />}

        {data && data.length === 0 && (
          <h3 className={cls.sites_list_not_sites_title}>Сайты не найдены</h3>
        )}

        {data &&
          Boolean(sorted.length) &&
          sorted.map(site => (
            <div key={site.id} className={cls.sites_list_item}>
              <SiteCard site={site} />
            </div>
          ))}
      </div>
    </div>
  );
};
