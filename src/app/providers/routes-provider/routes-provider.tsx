import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { StoryBook } from "@/pages/story-book";
import { Layout } from "@/widgets/layout";
import { Main } from "@/pages/main";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="" element={<Main />} />
          <Route path="me" element={<>me</>} />
          <Route path="sites">
            <Route path="new" element={<>new</>} />
            <Route path=":siteId" element={<>siteId</>} />
          </Route>
        </Route>
        <Route path="story-book" element={<StoryBook />} />
        <Route path="login" element={<>Log in</>} />
        <Route path="signup" element={<>sign up</>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
