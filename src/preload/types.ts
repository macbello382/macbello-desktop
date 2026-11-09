export interface AppInfo {
  name: string;
  version: string;
  platform: string;
  electronVersion: string;
}

export interface MacbelloAPI {
  getAppInfo: () => Promise<AppInfo>;
  ping: () => Promise<string>;
}

declare global {
  interface Window {
    macbelloAPI: MacbelloAPI;
  }
}
