import React from 'react';
import { Users, UserPlus, Search } from 'lucide-react';

export const CustomersPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">Salon Clients Directory</h1>
          <p className="text-sm text-stone-400 mt-1">
            Offline-first client profiles, service history, and loyalty preferences.
          </p>
        </div>
        <button
          disabled
          className="flex items-center space-x-2 bg-stone-800 text-stone-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed border border-stone-700/50"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Client (Phase 2)</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 bg-stone-900/60 p-3 rounded-lg border border-stone-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            disabled
            placeholder="Search by client name, mobile number or membership..."
            className="w-full bg-stone-950/60 border border-stone-800 text-xs text-stone-300 rounded-md pl-9 pr-3 py-2 cursor-not-allowed focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-stone-900/40 border border-stone-800/80 rounded-xl p-12 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-stone-800/80 flex items-center justify-center mx-auto text-stone-500">
          <Users className="w-6 h-6" />
        </div>
        <h3 className="text-base font-medium text-stone-200">Client Directory Ready</h3>
        <p className="text-xs text-stone-400 max-w-sm mx-auto">
          Local client indexing and visit histories will sync across branches once synchronization and database tables are linked.
        </p>
      </div>
    </div>
  );
};
