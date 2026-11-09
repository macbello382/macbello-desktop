import React from 'react';
import { Scissors, Plus, Search } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">Salon Services Catalog</h1>
          <p className="text-sm text-stone-400 mt-1">
            Hair styling, treatments, spa packages, pricing tiers, and duration definitions.
          </p>
        </div>
        <button
          disabled
          className="flex items-center space-x-2 bg-stone-800 text-stone-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed border border-stone-700/50"
        >
          <Plus className="w-4 h-4" />
          <span>New Service (Phase 2)</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 bg-stone-900/60 p-3 rounded-lg border border-stone-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            disabled
            placeholder="Search service name, category (Hair, Beard, Spa)..."
            className="w-full bg-stone-950/60 border border-stone-800 text-xs text-stone-300 rounded-md pl-9 pr-3 py-2 cursor-not-allowed focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-stone-900/40 border border-stone-800/80 rounded-xl p-12 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-stone-800/80 flex items-center justify-center mx-auto text-stone-500">
          <Scissors className="w-6 h-6" />
        </div>
        <h3 className="text-base font-medium text-stone-200">Catalog Placeholder</h3>
        <p className="text-xs text-stone-400 max-w-sm mx-auto">
          Service packages, GST tax slots, and stylist commissions will be populated here.
        </p>
      </div>
    </div>
  );
};
