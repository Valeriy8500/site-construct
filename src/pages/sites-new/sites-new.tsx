import { SiteConstructPanel } from "@/widgets/site-construct-panel";
import cls from "./sites-new.module.scss";
import { SiteViewPanel } from "@/widgets/site-view-panel";

export const SitesNew = () => {
  return (
    <div className={cls.sites_new}>
      <SiteConstructPanel />
      <SiteViewPanel />
    </div>
  );
};
