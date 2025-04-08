import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "@components/Spinner";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@pages/HomePage"));
const UserDetailsPage = lazy(() => import("@pages/UserDetailsPage"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
