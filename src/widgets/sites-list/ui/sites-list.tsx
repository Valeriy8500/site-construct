import { SiteCard } from "@/entities/site/ui/site-card";
import cls from "./sites-list.module.scss";
import { SortType } from "@/features/sort";
import { useGetSitesQuery } from "@/entities/site/api/site.api.ts";
import { Loader } from "@/shared/ui/loader";

interface SitesListProps {
  search: string;
  sort: SortType;
}
export const SitesList = ({}: SitesListProps) => {
  const { data, isLoading } = useGetSitesQuery();

  return (
    <div className={cls.sites_list}>
      <div className={cls.sites_list_container}>
        {isLoading && <Loader />}

        {data && data.length === 0 && (
          <h3 className={cls.sites_list_not_sites_title}>Сайты не найдены</h3>
        )}

        {data &&
          Boolean(data.length) &&
          data.map(site => (
            <div key={site.id} className={cls.sites_list_item}>
              <SiteCard site={site} />
            </div>
          ))}
      </div>
    </div>
  );
};
