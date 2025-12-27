// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MsalAppProvider } from "./app/providers/msal-provider";
import { AuthProvider } from "./app/providers/auth-provider";
import { AppRoutes } from "./app/routes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <MsalAppProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
    </MsalAppProvider>
  );
}