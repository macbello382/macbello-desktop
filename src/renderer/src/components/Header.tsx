import React, { useState, useEffect } from 'react';
import { Store, Wifi, ShieldCheck, Sparkles } from 'lucide-react';
import type { AppInfo } from '@preload/types';

interface HeaderProps {
  currentBranch?: string;
  branchCode?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentBranch = 'Macbello Flagship Salon',
  branchCode = 'MB-01',
}) => {
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Fetch desktop app info securely via context bridge
    if (window.macbelloAPI?.getAppInfo) {
      window.macbelloAPI.getAppInfo().then(setAppInfo).catch(console.error);
    }

    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-14 bg-brand-dark border-b border-stone-800 px-5 flex items-center justify-between select-none">
      {/* Brand & Branch Info */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-gold to-yellow-600 flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 text-stone-950" />
          </div>
          <div>
            <span className="font-bold tracking-wider text-base uppercase text-brand-accent">
              Macbello
            </span>
            <span className="text-xs text-stone-400 ml-1.5 font-medium">Desktop</span>
          </div>
        </div>

        <div className="h-4 w-px bg-stone-700" />

        <div className="flex items-center space-x-2 text-stone-300 text-xs bg-stone-900/80 px-2.5 py-1 rounded-md border border-stone-800">
          <Store className="w-3.5 h-3.5 text-brand-accent" />
          <span className="font-medium text-stone-200">{currentBranch}</span>
          <span className="text-[10px] text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded font-mono">
            {branchCode}
          </span>
        </div>
      </div>

      {/* Status & Clock */}
      <div className="flex items-center space-x-4 text-xs">
        {/* Local SQLite Mode Indicator */}
        <div className="flex items-center space-x-1.5 text-stone-400 bg-stone-900/60 px-2.5 py-1 rounded border border-stone-800/80">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-medium text-stone-300">Local SQLite Secure</span>
        </div>

        {/* Offline / Standalone Status */}
        <div className="flex items-center space-x-1.5 text-stone-400 bg-stone-900/60 px-2.5 py-1 rounded border border-stone-800/80">
          <Wifi className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-medium text-stone-300">Standalone Mode</span>
        </div>

        {/* Clock */}
        <div className="text-stone-300 font-mono font-medium text-xs bg-stone-900 px-3 py-1 rounded border border-stone-800">
          {time || '--:--:--'}
        </div>

        {/* App Version Tag */}
        {appInfo && (
          <span className="text-[10px] text-stone-400">
            v{appInfo.version}
          </span>
        )}
      </div>
    </header>
  );
};
