// src/features/auth/components/LoginButton.tsx
import { useMsal } from "@azure/msal-react";

export function LoginButton() {
  const { instance } = useMsal();

  return (
    <button
      onClick={() => instance.loginRedirect()}
      className="btn btn-primary"
    >
      Sign in with Microsoft
    </button>
  );
}