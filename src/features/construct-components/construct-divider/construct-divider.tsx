import { SiteElement } from "@/entities/site/model/site.types";
import "./construct-divider.module.scss";

interface Divider {
  position?: SiteElement["position"];
  width?: number;
}

export const Divider = ({ position, width }: Divider) => {
  return <hr style={{ top: position?.top, left: position?.left, width }} />;
};
