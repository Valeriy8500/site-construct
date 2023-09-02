import { Site } from "@/entities/site/model/site.types.ts";
import cls from "./site-card.module.scss";
import { Button } from "@/shared/ui/button";
import { TypesButton } from "@/shared/ui/button/button";

interface SiteCardProps {
  site: Site;
}

export const SiteCard = ({ site }: SiteCardProps) => {
  return (
    <div className={cls.site_card} style={{ backgroundColor: site.bg }}>
      <h3 className={cls.site_card_title}>{site.name}</h3>
      <div className={cls.site_card_buttons}>
        <Button typeButton={TypesButton.primary}>Редактировать</Button>
        <Button typeButton={TypesButton.failed}>Удалить</Button>
      </div>
    </div>
  );
};
