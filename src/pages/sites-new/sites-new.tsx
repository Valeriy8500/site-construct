import { useState } from "react";
import { SiteConstructPanel } from "@/widgets/site-construct-panel";
import cls from "./sites-new.module.scss";
import { SiteViewPanel } from "@/widgets/site-view-panel";

interface ISiteElement {
  id: number;
  content: JSX.Element;
}

export const SitesNew = () => {
  const [elements, setElements] = useState<ISiteElement[]>([]);

  const handleAddElement = (element: JSX.Element) => {
    setElements(prev => [
      ...prev,
      {
        id: Date.now(),
        content: element,
      },
    ]);
  };

  return (
    <div className={cls.sites_new}>
      <SiteConstructPanel onClick={handleAddElement} />
      <SiteViewPanel sites={elements} />
    </div>
  );
};
