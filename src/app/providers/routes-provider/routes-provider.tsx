import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { StoryBook } from "@/pages/story-book";
import { Layout } from "@/widgets/layout";
import { Main } from "@/pages/main";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Main />} />
        <Route path="me" element={<>me</>} />
        <Route path="sites">
          <Route path="new" element={<>new</>} />
          <Route path=":siteId" element={<>siteId</>} />
        </Route>
        <Route path="story-book" element={<StoryBook />} />
      </Route>
      <Route path="/login" element={<>Log in</>} />
      <Route path="/signup" element={<>sign up</>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
