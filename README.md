# Macbello Desktop - Salon Billing & Multi-Branch POS

Custom desktop billing and point-of-sale (POS) application built for **Macbello Salons**.

---

## 🏗 Architecture & Technology Stack

- **Desktop Framework**: [Electron](https://www.electronjs.org/) (Strict security mode, sandbox enabled, context isolation)
- **UI Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/) (Instant HMR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Salon dark theme design tokens)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Local Storage Architecture**: SQLite database layer abstraction (`macbello_local.db`) for offline-first resilience

---

## 📁 Project Directory Structure

```text
Macbello-Desktop/
├── src/
│   ├── main/                    # Electron Main Process
│   │   └── index.ts             # Window lifecycle, security policies & IPC handlers
│   ├── preload/                 # Secure Preload Scripts
│   │   ├── index.ts             # ContextBridge exposing window.macbelloAPI
│   │   └── types.ts             # TypeScript definitions for the bridge
│   ├── renderer/                # React Application (Vite Root)
│   │   ├── index.html           # HTML shell with strict Content Security Policy
│   │   └── src/
│   │       ├── main.tsx         # React root bootstrap
│   │       ├── App.tsx          # Application shell component
│   │       ├── index.css        # Tailwind CSS directives and salon theme variables
│   │       ├── vite-env.d.ts    # Vite client types
│   │       ├── components/      # UI components (Header, Sidebar, Shell)
│   │       └── pages/           # Views (Dashboard, Invoices, Customers, Services, Settings)
│   ├── database/                # SQLite local database management interfaces
│   │   └── index.ts             # Database connection contracts & configuration
│   ├── services/                # Business logic & salon service layer
│   │   └── index.ts             # Branch, catalog, and billing service abstractions
│   ├── authentication/          # Authentication module interfaces
│   │   └── index.ts             # Staff, stylist, and manager role contracts
│   ├── synchronization/         # Cloud synchronization interfaces
│   │   └── index.ts             # Sync state machines & queue definitions
│   └── utilities/               # Shared utilities
│       └── index.ts             # Currency (INR) and date formatters, classnames helper
├── dist/                        # Production build artifacts
├── tsconfig.json                # Renderer & shared TypeScript configuration
├── tsconfig.main.json           # Electron Main & Preload TypeScript configuration
├── tsconfig.node.json           # Build tooling configuration
├── vite.config.mts              # Vite configuration with Tailwind CSS plugin
└── package.json                 # Project dependencies & build scripts
```

---

## 🔒 Security Best Practices Implemented

1. **Context Isolation**: `contextIsolation: true` is strictly enforced.
2. **Node Integration Disabled**: `nodeIntegration: false` in the renderer window to prevent arbitrary system execution from UI.
3. **Sandbox Enabled**: `sandbox: true` enabled on the renderer process.
4. **Secure Preload Bridge**: Renderer interacts with Main process only through an explicit `contextBridge.exposeInMainWorld('macbelloAPI', ...)` bridge.
5. **Content Security Policy (CSP)**: Headers and meta tags restrict unauthorized script/style injection.
6. **Window Navigation & Popups Restricter**: External links are intercepted and opened in OS default browser via `shell.openExternal`; unauthorized internal navigation is blocked.
7. **Single Instance Lock**: Prevents duplicate POS instances writing conflicting local SQLite transactions.

---

## 🚀 Available Scripts

### Development Mode
Runs Vite development server with Hot Module Replacement (HMR) and Electron concurrently:
```bash
npm run dev
```

### Production Build
Compiles both the Electron main process and the React renderer:
```bash
npm run build
```

### Run Production Build
Launches the compiled desktop app from `dist/`:
```bash
npm start
```

### TypeScript Verification
Typechecks the entire project across main, preload, and renderer layers:
```bash
npm run typecheck
```
