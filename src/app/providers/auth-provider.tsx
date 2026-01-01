// src/app/providers/auth-provider.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { mapClaimsToUser } from "../features/auth/utils/mapClaimsToUser";
import { AuthContextValue } from "../shared/types/auth";
import { User } from "../shared/types/user";

// ✅ 1. Create the context at the top
const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  roles: [],
  permissions: [],
  loading: true,
});

// ✅ 2. Provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { accounts } = useMsal();
  const account = accounts[0];

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("ID TOKEN CLAIMS:", account?.idTokenClaims);

    if (account && account.idTokenClaims) {
      const mapped = mapClaimsToUser(account.idTokenClaims);
      setUser(mapped);
      setLoading(false);
    } else if (!account) {
      setUser(null);
      setLoading(false);
    }
  }, [account]);

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    roles: user?.roles ?? [],
    permissions: user?.permissions ?? [],
    loading,
  };

  // value.roles = ["Admin"]
  console.log("User:", value.user)
  console.log("isAuthenticated:", value.isAuthenticated)
  console.log("Roles:", value.roles)
  console.log("Permissions:", value.permissions)

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ✅ 3. Hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}