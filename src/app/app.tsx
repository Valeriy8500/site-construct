import { RoutesProvider } from "@/app/providers/routes-provider";
import { Providers } from "./providers";
import "react-quill/dist/quill.snow.css";
import "./styles/index.scss";

export const App = () => {
  return (
    <Providers>

      <RoutesProvider />
    </Providers>
  );
};
