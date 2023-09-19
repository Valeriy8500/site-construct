import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { SiteConstructPanel } from "@/widgets/site-construct-panel";
import cls from "./sites-edit.module.scss";
import { SiteViewPanel } from "@/widgets/site-view-panel";
import { useGetSiteByIdQuery } from "@/entities/site/api";
import { Loader } from "@/shared/ui/loader";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getUserId } from "@/entities/user/model/user.selectors.ts";
import { clearSiteElements } from "@/entities/site/model/site.selectors.ts";

export const SitesEdit = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(getUserId);
  const { data: site, isLoading } = useGetSiteByIdQuery(String(siteId), {
    skip: !siteId,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (site && site.authorId !== userId) {
      navigate("/");
    }
  }, [site]);

  useEffect(() => {
    return () => dispatch(clearSiteElements());
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={cls.sites_edit}>
      <SiteConstructPanel />
      <SiteViewPanel />
    </div>
  );
};
