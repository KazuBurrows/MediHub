// src/features/auth/components/LoginButton.tsx
import { useMsal } from "@azure/msal-react";
import { Button } from "../../../shared/components/ui/button";

export function LoginButton() {
  const { instance } = useMsal();

  return (
    <Button onClick={() => instance.loginRedirect()} variant="primary">
      Sign in with Microsoft
    </Button>
  );
}