import { Site } from "@/entities/site/model/site.types.ts";
import cls from "./site-card.module.scss";
import { Button } from "@/shared/ui/button";

interface SiteCardProps {
  site: Site;
}

export const SiteCard = ({ site }: SiteCardProps) => {
  return (
    <div className={cls.site_card} style={{ backgroundColor: site.bg }}>
      <h3 className={cls.site_card_title}>{site.name}</h3>
      <div className={cls.site_card_buttons}>
        <Button typeButton="primary">Редактировать</Button>
        <Button typeButton="failed">Удалить</Button>
      </div>
    </div>
  );
};
