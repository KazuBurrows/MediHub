// src/app/routes/login.tsx
import { useAuth } from "../providers/auth-provider";
import { Navigate } from "react-router-dom";
import { LoginButton } from "../features/auth/components/LoginButton";

export default function LoginPage() {
  const { isAuthenticated, loading } = useAuth();

  // Wait for MSAL to finish loading
  if (loading) return <div>Loading...</div>;

  // ⭐ If already logged in, redirect to schedule
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to MediHub</h1>
      <p>Please sign in with your Microsoft account to continue.</p>
      <LoginButton />
    </div>
  );
}