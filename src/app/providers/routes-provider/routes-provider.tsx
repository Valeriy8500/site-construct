import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProtectedRoute } from "./protected-route";
import { StoryBook } from "@/pages/story-book";
import { Layout } from "@/widgets/layout";
import { Loader } from "@/shared/ui/loader";
const Main = lazy(() => import("@/pages/main"));
const SitesNew = lazy(() => import("@/pages/sites-new"));
const LoginForm = lazy(() => import("@/pages/login"));
const RegisterForm = lazy(() => import("@/pages/register"));
const PasswordForm = lazy(() => import("@/pages/password-form"));

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
            <Suspense fallback={<Loader />}>
              <Main />
            </Suspense>
          }
        />
        <Route path="me" element={<>me</>} />
        <Route
          path="password"
          element={
            <Suspense>
              <PasswordForm />
            </Suspense>
          }
        />
        <Route path="sites">
          <Route
            path="new"
            element={
              <Suspense fallback={<Loader />}>
                <SitesNew />
              </Suspense>
            }
          />
          <Route path=":siteId" element={<>siteId</>} />
        </Route>
        <Route path="story-book" element={<StoryBook />} />
      </Route>
      <Route
        path="/login"
        element={
          <Suspense>
            <LoginForm />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense>
            <RegisterForm />
          </Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
