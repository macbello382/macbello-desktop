import { contextBridge, ipcRenderer } from 'electron';
import type { MacbelloAPI, AppInfo } from './types';

// Enforce secure context isolation
const macbelloAPI: MacbelloAPI = {
  getAppInfo: (): Promise<AppInfo> => ipcRenderer.invoke('app:getInfo'),
  ping: (): Promise<string> => ipcRenderer.invoke('app:ping'),
};

try {
  contextBridge.exposeInMainWorld('macbelloAPI', macbelloAPI);
} catch (error) {
  console.error('Failed to expose macbelloAPI to main world:', error);
}
