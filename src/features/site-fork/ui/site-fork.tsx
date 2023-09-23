import { PiGitFork } from "react-icons/pi";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/shared/ui/button";
import cls from "./site-fork.module.scss";
import { ISite } from "@/entities/site/model/site.types.ts";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getUserId } from "@/entities/user/model/user.selectors.ts";
import { useIncrementForkMutation, useSaveSiteMutation } from "@/entities/site/api";

interface SiteForkProps {
  site: ISite;
  onSuccess: () => void;
}
export const SiteFork = ({ site, onSuccess }: SiteForkProps) => {
  const [saveSite, { isSuccess }] = useSaveSiteMutation();
  const [increment] = useIncrementForkMutation();
  const userId = useAppSelector(getUserId);

  useEffect(() => {
    if (isSuccess && site.authorId !== userId) {
      increment({ id: site.id, forkCount: site.forkCount + 1 });
      onSuccess();
    }
  }, [isSuccess]);

  const handleClick = () => {
    const dateFork = new Date();
    const siteName = String(dateFork).split(" ").slice(1, 5).join(" ");

    saveSite({
      ...site,
      name: `${site.name} (${siteName})`,
      id: uuidv4(),
      authorId: userId,
      updatedAt: Date.now(),
      forkCount: 0,
    });
  };

  return (
    <Button onClick={handleClick} className={cls.site_fork}>
      <PiGitFork />
    </Button>
  );
};
