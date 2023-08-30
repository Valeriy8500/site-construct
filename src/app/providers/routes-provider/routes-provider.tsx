import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProtectedRoute } from "./protected-route";
import { StoryBook } from "@/pages/story-book";
import { Layout } from "@/widgets/layout";
const Main = lazy(() => import("@/pages/main"));
const SitesNew = lazy(() => import("@/pages/sites-new"));

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
        <Route
          index
          element={
            <Suspense>
              <Main />
            </Suspense>
          }
        />
        <Route path="me" element={<>me</>} />
        <Route path="sites">
          <Route
            path="new"
            element={
              <Suspense>
                <SitesNew />
              </Suspense>
            }
          />
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
