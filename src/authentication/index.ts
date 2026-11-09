/**
 * Macbello Desktop - Authentication Types & Foundation
 *
 * NOTE: Authentication mechanisms (Staff PIN, Manager override, biometric/passwords)
 * will be implemented in subsequent phases.
 */

export type UserRole = 'owner' | 'manager' | 'cashier' | 'stylist';

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
  branchId: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: AuthUser | null;
  currentShiftId: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
  currentShiftId: null,
};
