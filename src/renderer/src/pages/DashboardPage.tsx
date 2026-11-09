import React from 'react';
import { DollarSign, Users, Scissors, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">Salon Operations Overview</h1>
          <p className="text-sm text-stone-400 mt-1">
            Welcome to Macbello Desktop. Multi-branch salon management and local billing foundation.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950 text-emerald-400 border border-emerald-800">
            System Operational
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-stone-900/70 border border-stone-800 p-4 rounded-xl">
          <div className="flex items-center justify-between text-stone-400 text-xs">
            <span>Today's Revenue</span>
            <DollarSign className="w-4 h-4 text-brand-accent" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-stone-100">₹0.00</span>
            <span className="text-[11px] text-stone-400 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-emerald-400" /> Standalone
            </span>
          </div>
        </div>

        <div className="bg-stone-900/70 border border-stone-800 p-4 rounded-xl">
          <div className="flex items-center justify-between text-stone-400 text-xs">
            <span>Invoices Generated</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-stone-100">0</span>
            <span className="text-[11px] text-stone-400">Ready for billing</span>
          </div>
        </div>

        <div className="bg-stone-900/70 border border-stone-800 p-4 rounded-xl">
          <div className="flex items-center justify-between text-stone-400 text-xs">
            <span>Registered Clients</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-stone-100">0</span>
            <span className="text-[11px] text-stone-400">Local Directory</span>
          </div>
        </div>

        <div className="bg-stone-900/70 border border-stone-800 p-4 rounded-xl">
          <div className="flex items-center justify-between text-stone-400 text-xs">
            <span>Active Stylists</span>
            <Scissors className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-stone-100">MB-01</span>
            <span className="text-[11px] text-stone-400">Main Branch</span>
          </div>
        </div>
      </div>

      {/* Foundation Status Notice */}
      <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-5">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-stone-200">Phase 1 Foundation Active</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Desktop shell, Electron security hardening, context isolation, Vite HMR, and Tailwind design tokens are configured.
              Local SQLite database models, billing workflows, and authentication will be introduced in subsequent phases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
