/**
 * Macbello Desktop - Service Layer Interfaces
 *
 * Provides a clean abstraction boundary between UI components
 * and database/backend services.
 */

export interface BranchInfo {
  id: string;
  code: string;
  name: string;
  address: string;
  phone: string;
  taxNumber?: string;
  currency: string;
}

export interface SalonServiceRegistry {
  version: string;
  currentBranch: BranchInfo | null;
}

export const initialSalonServiceRegistry: SalonServiceRegistry = {
  version: '1.0.0',
  currentBranch: {
    id: 'branch-main',
    code: 'MB-01',
    name: 'Macbello Flagship Salon',
    address: 'Main Boulevard, Suite 101',
    phone: '+91 98765 43210',
    currency: 'INR',
  },
};
