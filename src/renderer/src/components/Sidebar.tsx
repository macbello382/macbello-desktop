import React from 'react';
import {
  LayoutDashboard,
  Receipt,
  Users,
  Scissors,
  Settings,
  Database,
  CalendarCheck,
} from 'lucide-react';

export type NavigationTab =
  | 'dashboard'
  | 'invoices'
  | 'appointments'
  | 'customers'
  | 'services'
  | 'settings';

interface SidebarProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
}

interface NavItem {
  id: NavigationTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'invoices', label: 'Billing / Invoices', icon: Receipt },
  { id: 'appointments', label: 'Appointments', icon: CalendarCheck },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'services', label: 'Salon Services', icon: Scissors },
  { id: 'settings', label: 'Branch Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  return (
    <aside className="w-64 bg-[#181614] border-r border-stone-800 flex flex-col justify-between select-none">
      <div className="p-3 space-y-1">
        <div className="px-3 py-2 text-[11px] font-semibold text-stone-300 uppercase tracking-wider">
          Main Menu
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-stone-800 to-stone-800/80 text-brand-accent border-l-2 border-brand-accent shadow-sm'
                    : 'text-stone-300 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-brand-accent' : 'text-stone-400'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-stone-800 text-stone-300 px-1.5 py-0.5 rounded font-medium">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Database / System Footer */}
      <div className="p-3 border-t border-stone-800/70 bg-stone-900/40">
        <div className="flex items-center space-x-2 text-stone-400 px-2 py-1.5 text-xs">
          <Database className="w-3.5 h-3.5 text-stone-500" />
          <div className="truncate">
            <p className="text-[11px] font-medium text-stone-300 truncate">macbello_local.db</p>
            <p className="text-[10px] text-stone-400">SQLite Offline Engine</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
