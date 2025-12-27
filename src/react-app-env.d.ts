/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_AZURE_CLIENT_ID: string;
    REACT_APP_AZURE_TENANT_ID: string;
  }
}