import { MdPreview } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { Suspense, useEffect, useState } from "react";
import { TfiSaveAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cls from "./site-view-panel.module.scss";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getSite } from "@/entities/site/model/site.selectors.ts";
import ConstructBlock from "@/features/construct-components/construct-block";
import { render } from "../lib/render.ts";
import { getUserId } from "@/entities/user/model/user.selectors.ts";
import { useSaveSiteMutation } from "@/entities/site/api/site.api.ts";

export const SiteViewPanel = () => {
  const site = useAppSelector(getSite);
  const [current, setCurrent] = useState<string>("");
  const userId = useAppSelector(getUserId);
  const [saveSite, { isSuccess }] = useSaveSiteMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  const handleSaveSite = () => {
    if (site.elements.length) {
      saveSite({
        ...site,
        authorId: userId,
        updatedAt: Date.now(),
      });
    } else {
      toast.error("Невозможно сохранить пустой сайт!");
    }
  };

  return (
    <div className={cls.site_view_panel}>
      <div className={cls.site_view_panel_wrapper} style={{ backgroundColor: site.bg }}>
        {Boolean(site.elements.length) &&
          site.elements.map(item => {
            const Component = render(item.path);

            return (
              <ConstructBlock
                key={item.id}
                style={{ width: item.width, height: item.height, ...item.position }}
                id={item.id}
                current={current}
                onCurrent={setCurrent}
              >
                {Component && (
                  <Suspense>
                    <Component edit={current === item.id} {...item} />
                  </Suspense>
                )}
              </ConstructBlock>
            );
          })}

        <div className={cls.site_view_panel_buttons_block}>
          <div className={cls.site_view_panel_buttons_item}>
            <Button>
              <MdPreview />
            </Button>
          </div>
          <div className={cls.site_view_panel_buttons_item}>
            <Button onClick={handleSaveSite}>
              <TfiSaveAlt />
            </Button>
          </div>
          <div className={cls.site_view_panel_buttons_item}>
            <Button>
              <AiOutlineDownload />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
