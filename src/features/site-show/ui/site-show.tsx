import { MdPreview } from "react-icons/md";
import { FC, Suspense } from "react";
import { Button } from "@/shared/ui/button";
import { render } from "@/widgets/site-view-panel/lib/render.ts";
import { ISite } from "@/entities/site/model/site.types.ts";
import { useToggle } from "@/shared/hooks/use-toggle.ts";
import { ModalCode } from "@/shared/ui/modal-code";
import cls from "./site-show.module.scss";

interface SiteShowProps {
  site: ISite;
  className?: string;
}
export const SiteShow: FC<SiteShowProps> = ({ site, className }) => {
  const { toggle, onTrue, onFalse } = useToggle();

  return (
    <>
      <Button title="Показать сайт" onClick={onTrue} className={className || ""}>
        <MdPreview />
      </Button>

      <ModalCode open={toggle} onClose={onFalse} bg={site.bg}>
        <div className={cls.site_show}>
          {Boolean(site.elements.length) &&
            site.elements.map(item => {
              const Component = render(item.path);

              return (
                <div key={item.id}>
                  {Component && (
                    <Suspense>
                      <Component edit={false} {...item} />
                    </Suspense>
                  )}
                </div>
              );
            })}
        </div>
      </ModalCode>
    </>
  );
};
