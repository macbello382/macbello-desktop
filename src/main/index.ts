import { app, BrowserWindow, ipcMain, shell, session } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

const isDev = process.env.NODE_ENV === 'development';
const devServerPort = process.env.PORT || 5173;

function setupSecurityHeaders(): void {
  // Enforce secure CSP headers across all responses
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          isDev
            ? "default-src 'self' 'unsafe-inline' http://localhost:* ws://localhost:*; img-src 'self' data: https:; font-src 'self' data:;"
            : "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;",
        ],
      },
    });
  });
}

function setupIpcHandlers(): void {
  ipcMain.handle('app:getInfo', async () => {
    return {
      name: 'Macbello Salon POS & Billing',
      version: app.getVersion(),
      platform: process.platform,
      electronVersion: process.versions.electron,
    };
  });

  ipcMain.handle('app:ping', async () => {
    return 'pong';
  });
}

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 700,
    backgroundColor: '#1e1b18',
    show: false,
    autoHideMenuBar: true,
    title: 'Macbello Salon Billing',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  // Smooth window display once ready
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
    if (process.env.TEST_EXIT === 'true') {
      console.log('ELECTRON_SMOKE_TEST_SUCCESS: Window created and ready-to-show.');
      setTimeout(() => {
        app.quit();
      }, 500);
    }
  });

  // Block opening external windows inside the app; delegate to OS browser if trusted
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  // Prevent unexpected navigation
  mainWindow.webContents.on('will-navigate', (event, navigationUrl) => {
    const parsed = new URL(navigationUrl);
    if (isDev && parsed.origin === `http://localhost:${devServerPort}`) {
      return;
    }
    if (parsed.protocol !== 'file:') {
      event.preventDefault();
    }
  });

  if (isDev) {
    mainWindow.loadURL(`http://localhost:${devServerPort}`);
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Ensure single instance lock for desktop POS
const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    setupSecurityHeaders();
    setupIpcHandlers();
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
