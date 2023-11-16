/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_WEBSITE: string;
    readonly VITE_APP_DOMAINE: string;
    readonly VITE_APP_PORT: number;
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_APP_API_DOMAINE: string;
    readonly VITE_APP_API_PORT: number;
    readonly VITE_APP_API_BASE_URL: string;
    readonly VITE_APP_API_RESSOURCE: string;
    readonly VITE_APP_API_FAKER_RESSOURCE: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  