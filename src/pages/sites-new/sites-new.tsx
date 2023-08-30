import cls from "./sites-new.module.scss";
import { SiteConstructPanel } from "@/widgets/site-construct-panel";

export const SitesNew = () => {
  return (
    <div className={cls.sites_new}>
      <SiteConstructPanel />
    </div>
  );
};
