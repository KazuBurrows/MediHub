import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./login";
import LogoutPage from "./logout";
import SchedulePage from "./schedule";
import { ProtectedRoute } from "../guards/ProtectedRoute";
import { RoleRoute } from "../guards/RoleRoute";
import Forbidden from "./errors/403";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />

      <Route
        path="/schedule"
        element={
          <ProtectedRoute>
            <RoleRoute roles={["Admin", "Viewer"]}>
              <SchedulePage />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/403"
        element={
          <ProtectedRoute>
            <Forbidden />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate to="/schedule" replace />} />

      {/* catch-all fallback */}
      <Route path="*" element={<Navigate to="/schedule" replace />} />
    </Routes>
  );
}