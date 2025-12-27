// src/features/auth/components/LoginButton.tsx
import { useMsal } from "@azure/msal-react";

export function LogoutButton() {
  const { instance } = useMsal();

  return (
    <button
      onClick={() => instance.logoutRedirect()}
      className="btn btn-primary"
    >
      Log out with Microsoft
    </button>
  );
}