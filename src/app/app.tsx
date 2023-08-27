import { RoutesProvider } from "@/app/providers/routes-provider";
import { Providers } from "./providers";
import { Main } from "@/pages/main";
import "./styles/index.scss";

export const App = () => {
  return (
    <Providers>
      <Main />
      <RoutesProvider />
    </Providers>
  );
};
