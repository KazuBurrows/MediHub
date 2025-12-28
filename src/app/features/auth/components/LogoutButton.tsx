// src/features/auth/components/LoginButton.tsx
import { useMsal } from "@azure/msal-react";
import { Button } from "../../../shared/components/ui/button";

export function LogoutButton() {
  const { instance } = useMsal();

  return (
    <Button onClick={() => instance.logoutRedirect()} variant="primary">
      Logout
    </Button>
  );
}