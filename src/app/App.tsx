import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "@components/Spinner";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@pages/HomePage"));
const UserDetailsPage = lazy(() => import("@pages/UserDetailsPage"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/users" replace />} />
        <Route
          path="/users"
          element={
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/user/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <UserDetailsPage />
            </Suspense>
          }
        />

        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
