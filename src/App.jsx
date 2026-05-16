import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import StorePage from "./pages/StorePage.jsx";
import FranchisePage from "./pages/FranchisePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="franchise" element={<FranchisePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
