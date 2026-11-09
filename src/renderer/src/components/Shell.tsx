import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar, type NavigationTab } from './Sidebar';
import { DashboardPage } from '../pages/DashboardPage';
import { InvoicesPage } from '../pages/InvoicesPage';
import { CustomersPage } from '../pages/CustomersPage';
import { ServicesPage } from '../pages/ServicesPage';
import { SettingsPage } from '../pages/SettingsPage';

export const Shell: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'invoices':
      case 'appointments':
        return <InvoicesPage />;
      case 'customers':
        return <CustomersPage />;
      case 'services':
        return <ServicesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#141210] text-stone-100 font-sans antialiased overflow-hidden">
      {/* Top Application Header */}
      <Header currentBranch="Macbello Flagship Salon" branchCode="MB-01" />

      {/* Main App Body with Sidebar & Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />
        <main className="flex-1 overflow-y-auto bg-[#1a1715]/60">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
