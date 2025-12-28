import { useAuth } from "../providers/auth-provider";
import { Navigate } from "react-router-dom";
import { LoginButton } from "../features/auth/components/LoginButton";
import "../shared/styles/login.css";

export default function LoginPage() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="login-loading">Loading...</div>;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome to MediHub</h1>
        <p className="login-subtitle">
          Please sign in with your Microsoft account to continue.
        </p>

        <div className="login-button-wrapper">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}