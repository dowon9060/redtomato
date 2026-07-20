import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

const BangtoPage = lazy(() => import("./pages/BangtoPage.jsx"));
const MenuPage = lazy(() => import("./pages/MenuPage.jsx"));
const StorePage = lazy(() => import("./pages/StorePage.jsx"));
const FranchisePage = lazy(() => import("./pages/FranchisePage.jsx"));

function RouteFallback() {
  return <div className="route-loading" aria-hidden />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="bangto"
            element={
              <Suspense fallback={<RouteFallback />}>
                <BangtoPage />
              </Suspense>
            }
          />
          <Route
            path="menu"
            element={
              <Suspense fallback={<RouteFallback />}>
                <MenuPage />
              </Suspense>
            }
          />
          <Route
            path="store"
            element={
              <Suspense fallback={<RouteFallback />}>
                <StorePage />
              </Suspense>
            }
          />
          <Route
            path="franchise"
            element={
              <Suspense fallback={<RouteFallback />}>
                <FranchisePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
