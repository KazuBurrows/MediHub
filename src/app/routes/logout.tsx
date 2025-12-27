// src/app/routes/logout.tsx
import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

export default function LogoutPage() {
  const { instance } = useMsal();

  useEffect(() => {
    instance.logoutRedirect();
  }, [instance]);

  return <div>Signing out...</div>;
}