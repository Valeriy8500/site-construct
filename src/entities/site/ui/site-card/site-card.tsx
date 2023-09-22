import { useNavigate } from "react-router-dom";
import { ISite } from "@/entities/site/model/site.types.ts";
import cls from "./site-card.module.scss";
import { Button } from "@/shared/ui/button";
import { TypesButton } from "@/shared/ui/button/button";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getUserId } from "@/entities/user/model/user.selectors.ts";
import { useDeleteSiteMutation } from "@/entities/site/api";

interface SiteCardProps {
  site: ISite;
}

export const SiteCard = ({ site }: SiteCardProps) => {
  const navigate = useNavigate();
  const userId = useAppSelector(getUserId);
  const [deleteSite, { isLoading }] = useDeleteSiteMutation();

  const handleEdit = (id: string) => {
    navigate(`/sites/${id}`);
  };

  const handleDelete = () => {
    deleteSite(site.id);
  };

  return (
    <div className={cls.site_card} style={{ backgroundColor: site.bg }} data-testid={site.id}>
      <h3 className={cls.site_card_title}>{site.name}</h3>
      {site.authorId === userId && (
        <div className={cls.site_card_buttons}>
          <Button onClick={() => handleEdit(site.id)} typeButton={TypesButton.primary}>
            Редактировать
          </Button>
          <Button onClick={handleDelete} typeButton={TypesButton.failed} isLoading={isLoading}>
            Удалить
          </Button>
        </div>
      )}
    </div>
  );
};
