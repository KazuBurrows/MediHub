export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
    knownAuthorities: ["login.microsoftonline.com", "login.windows.net"],
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  apiScopes: [
    process.env.REACT_APP_AZURE_API_SCOPE!, 
  ],
};