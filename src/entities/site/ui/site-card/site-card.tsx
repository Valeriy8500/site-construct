import { useNavigate } from "react-router-dom";
import { PiGitFork } from "react-icons/pi";
import { useEffect, useState } from "react";
import { ISite } from "@/entities/site/model/site.types.ts";
import cls from "./site-card.module.scss";
import { Button } from "@/shared/ui/button";
import { TypesButton } from "@/shared/ui/button/button";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getUserId } from "@/entities/user/model/user.selectors.ts";
import { useDeleteSiteMutation } from "@/entities/site/api";

interface SiteCardProps {
  site: ISite;
  onDeleteSite: () => void;
}

export const SiteCard = ({ site, onDeleteSite }: SiteCardProps) => {
  const navigate = useNavigate();
  const userId = useAppSelector(getUserId);
  const [deleteSite, { isLoading }] = useDeleteSiteMutation();
  const [isFirstRefresh, setIsFirstRefresh] = useState(true);

  const handleEdit = (id: string) => {
    navigate(`/sites/${id}`);
  };

  useEffect(() => {
    if (!isLoading && !isFirstRefresh) {
      onDeleteSite();
    }
  }, [isLoading]);

  const handleDelete = () => {
    deleteSite(site.id);
    if (isFirstRefresh) {
      setIsFirstRefresh(false);
    }
  };

  return (
    <div className={cls.site_card} style={{ backgroundColor: site.bg }} data-testid={site.id}>
      <div className={cls.site_card_head}>
        <h3 className={cls.site_card_title}>{site.name}</h3>
        <div className={cls.site_card_fork_count}>
          <PiGitFork /> {site?.forkCount?.toString()}
        </div>
      </div>
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
