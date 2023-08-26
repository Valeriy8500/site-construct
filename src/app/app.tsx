import { RoutesProvider } from "@/app/providers/routes-provider";
import { Providers } from "./providers";
import { Main } from "@/pages/main";
import { StoryBook } from "@/pages/story-book";
import "./styles/index.scss";

export const App = () => {
  return (
    <Providers>
      <Main />
      <StoryBook />
      <RoutesProvider />
    </Providers>
  );
};
