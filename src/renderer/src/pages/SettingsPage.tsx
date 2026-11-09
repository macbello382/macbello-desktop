import React from 'react';
import { Store, Shield, Monitor } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-stone-100">Branch & System Settings</h1>
        <p className="text-sm text-stone-400 mt-1">
          Multi-branch configuration, local database path, and desktop runtime parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Branch Profile */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center space-x-2 text-stone-200 font-semibold text-sm">
            <Store className="w-4 h-4 text-brand-accent" />
            <span>Active Salon Branch</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-stone-800">
              <span className="text-stone-400">Branch Name</span>
              <span className="text-stone-200 font-medium">Macbello Flagship Salon</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-800">
              <span className="text-stone-400">Branch Code</span>
              <span className="text-stone-200 font-mono">MB-01</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-800">
              <span className="text-stone-400">Default Currency</span>
              <span className="text-stone-200 font-medium">INR (₹)</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-stone-400">Multi-Branch Mode</span>
              <span className="text-amber-400 font-medium">Enabled (Standalone)</span>
            </div>
          </div>
        </div>

        {/* Database & Security */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center space-x-2 text-stone-200 font-semibold text-sm">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Security & Storage Foundation</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-stone-800">
              <span className="text-stone-400">Local Database</span>
              <span className="text-stone-200 font-mono">macbello_local.db (SQLite)</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-800">
              <span className="text-stone-400">Node Integration in Renderer</span>
              <span className="text-emerald-400 font-semibold">Disabled (Secure)</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-800">
              <span className="text-stone-400">Context Isolation</span>
              <span className="text-emerald-400 font-semibold">Enabled (Secure)</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-stone-400">Preload Bridge</span>
              <span className="text-emerald-400 font-mono">window.macbelloAPI</span>
            </div>
          </div>
        </div>

        {/* App Runtime */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-5 space-y-4 md:col-span-2">
          <div className="flex items-center space-x-2 text-stone-200 font-semibold text-sm">
            <Monitor className="w-4 h-4 text-blue-400" />
            <span>Desktop Technology Stack</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
              <span className="text-stone-300 block">Electron</span>
              <span className="text-stone-200 font-semibold mt-1 block">Context Isolated</span>
            </div>
            <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
              <span className="text-stone-300 block">React & TypeScript</span>
              <span className="text-stone-200 font-semibold mt-1 block">Strict Mode</span>
            </div>
            <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
              <span className="text-stone-300 block">Vite 6</span>
              <span className="text-stone-200 font-semibold mt-1 block">Instant HMR</span>
            </div>
            <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800">
              <span className="text-stone-300 block">Tailwind CSS</span>
              <span className="text-stone-200 font-semibold mt-1 block">Salon Dark Theme</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
