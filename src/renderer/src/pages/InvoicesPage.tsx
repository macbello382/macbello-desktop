import React from 'react';
import { Receipt, Plus, Search, Filter } from 'lucide-react';

export const InvoicesPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">Salon Invoices & Billing</h1>
          <p className="text-sm text-stone-400 mt-1">
            Local POS checkout, invoice printing, GST calculation, and split payment management.
          </p>
        </div>
        <button
          disabled
          className="flex items-center space-x-2 bg-stone-800 text-stone-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed border border-stone-700/50"
        >
          <Plus className="w-4 h-4" />
          <span>New Bill (Phase 2)</span>
        </button>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between gap-4 bg-stone-900/60 p-3 rounded-lg border border-stone-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            disabled
            placeholder="Search invoice number, client phone or stylist..."
            className="w-full bg-stone-950/60 border border-stone-800 text-xs text-stone-300 rounded-md pl-9 pr-3 py-2 cursor-not-allowed focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button
            disabled
            className="flex items-center space-x-1.5 text-xs text-stone-400 bg-stone-800/60 px-3 py-2 rounded-md border border-stone-700/50 cursor-not-allowed"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Empty State / Standalone Placeholder */}
      <div className="bg-stone-900/40 border border-stone-800/80 rounded-xl p-12 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-stone-800/80 flex items-center justify-center mx-auto text-stone-500">
          <Receipt className="w-6 h-6" />
        </div>
        <h3 className="text-base font-medium text-stone-200">No Invoices Yet</h3>
        <p className="text-xs text-stone-400 max-w-sm mx-auto">
          Billing engine and SQLite receipt storage will be unlocked in the upcoming billing module implementation.
        </p>
      </div>
    </div>
  );
};
