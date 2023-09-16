import { RoutesProvider } from "@/app/providers/routes-provider";
import { Providers } from "./providers";
import "./styles/index.scss";

export const App = () => {
  return (
    <Providers>

      <RoutesProvider />
    </Providers>
  );
};
