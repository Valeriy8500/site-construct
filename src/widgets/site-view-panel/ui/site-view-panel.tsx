import { MdPreview } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { Suspense } from "react";
import cls from "./site-view-panel.module.scss";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getSiteElements } from "@/entities/site/model/site.selectors.ts";
import ConstructBlock from "@/features/construct-components/construct-block";
import { render } from "../lib/render.ts";
import { getSiteColor } from "@/entities/site/model/colorPalette.selectors.ts";

export const SiteViewPanel = () => {
  const siteColor = useAppSelector(getSiteColor);
  const elements = useAppSelector(getSiteElements);

  return (
    <div
      className={cls.site_view_panel}
      style={{ backgroundColor: siteColor }}
    >
      <div className={cls.site_view_panel_wrapper}>
        {Boolean(elements.length) &&
          elements.map(item => {
            const Component = render(item.content);

            return (
              <ConstructBlock
                key={item.id}
                style={{ width: item.width, height: item.height }}
                id={item.id}
              >
                {Component && (
                  <Suspense>
                    <Component />
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
            <Button>
              <AiOutlineDownload />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
