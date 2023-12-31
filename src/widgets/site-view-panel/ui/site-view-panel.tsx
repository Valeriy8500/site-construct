import { AiOutlineDownload } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";
import { Suspense, useEffect, useState, useRef } from "react";
import { TfiSaveAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cls from "./site-view-panel.module.scss";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getSite, getSiteColor } from "@/entities/site/model/site.selectors.ts";
import ConstructBlock from "@/features/construct-components/construct-block";
import { render } from "../lib/render.ts";
import { getUserId } from "@/entities/user/model/user.selectors.ts";
import { useSaveSiteMutation } from "@/entities/site/api/site.api.ts";
import { ModalCode } from "@/shared/ui/modal-code";
import { HtmlCode } from "@/features/html-code";
import { CssCode } from "@/features/css-code";
import { SiteShow } from "@/features/site-show";

export interface IShowSite {
  openSiteModal: boolean;
  openModalHint: boolean;
}

export const SiteViewPanel = () => {
  const site = useAppSelector(getSite);
  const [current, setCurrent] = useState<string>("");
  const userId = useAppSelector(getUserId);
  const [saveSite, { isSuccess }] = useSaveSiteMutation();
  const navigate = useNavigate();
  const siteRef = useRef<HTMLDivElement>(null);
  const [isShowCode, setIsShowCode] = useState<boolean>(false);

  const siteColor = useAppSelector(getSiteColor);

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
      <div
        className={cls.site_view_panel_wrapper}
        style={{ backgroundColor: siteColor }}
        ref={siteRef}
      >
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
                    <Component edit={current === item.id} {...{ ...item, position: undefined }} />
                  </Suspense>
                )}
              </ConstructBlock>
            );
          })}

        <div className={cls.site_view_panel_buttons_block}>
          <div className={cls.site_view_panel_buttons_item}>
            <SiteShow site={site} />
          </div>
          <div className={cls.site_view_panel_buttons_item}>
            <Button onClick={handleSaveSite} title="Сохранить сайт">
              <TfiSaveAlt />
            </Button>
          </div>
          <div className={cls.site_view_panel_buttons_item}>
            <Button title="Сохранить код страницы">
              <AiOutlineDownload />
            </Button>
          </div>
          <div className={cls.site_view_panel_buttons_item} onClick={() => setIsShowCode(true)}>
            <Button title="Показать код страницы">
              <VscCode />
            </Button>
          </div>
        </div>
      </div>
      <ModalCode open={isShowCode} onClose={() => setIsShowCode(false)}>
        <div className={cls.modal_body}>
          <HtmlCode htmlCode={siteRef.current} />
          <CssCode node={siteRef.current} />
        </div>
      </ModalCode>
    </div>
  );
};
