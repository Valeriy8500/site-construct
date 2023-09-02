import { useState } from "react";
import { SiteConstructPanel } from "@/widgets/site-construct-panel";
import cls from "./sites-new.module.scss";

interface ISite {
  id: number;
  content: JSX.Element;
}

export const SitesNew = () => {
  const [sites, setSites] = useState<ISite[]>([]);

  const handleAddElement = (element: JSX.Element) => {
    setSites([
      ...sites,
      {
        id: Date.now(),
        content: element,
      },
    ]);
  };

  return (
    <div className={cls.sites_new}>
      <SiteConstructPanel onClick={handleAddElement} />
      <ul className={cls.sites_new_list}>
        {sites.map(item => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};
