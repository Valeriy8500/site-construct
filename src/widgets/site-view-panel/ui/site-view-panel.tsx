import { MdPreview } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import cls from "./site-view-panel.module.scss";
import { Button } from "@/shared/ui/button";
interface SiteViewPanelProps {
  sites: {
    id: number;
    content: JSX.Element;
  }[];
}
export const SiteViewPanel = ({ sites }: SiteViewPanelProps) => {
  return (
    <div className={cls.site_view_panel}>
      <div className={cls.site_view_panel_wrapper}>
        <ul className={cls.site_view_panel_list}>
          {sites.map(item => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>

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
