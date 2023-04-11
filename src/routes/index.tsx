import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Providers, Inventory, Orders } from "../pages";
import { ROUTES } from "../models/index";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={ROUTES.DASHBOARD.path} replace />}
      />
      <Route path={ROUTES.DASHBOARD.path} element={<Dashboard />} />
      <Route path={ROUTES.INVENTORY.path} element={<Inventory />} />
      <Route path={ROUTES.ORDERS.path} element={<Orders />} />
      <Route path={ROUTES.PROVIDERS.path} element={<Providers />} />
    </Routes>
  );
}

export default AppRoutes;
