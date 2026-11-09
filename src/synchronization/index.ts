/**
 * Macbello Desktop - Multi-Branch Synchronization Foundation
 *
 * NOTE: Cloud synchronization engine, offline queue, and change tracking
 * will be connected in future development phases.
 */

export type SyncStatus = 'idle' | 'syncing' | 'error' | 'offline';

export interface SyncEngineStatus {
  status: SyncStatus;
  lastSyncedAt: Date | null;
  pendingChangesCount: number;
  branchId: string | null;
}

export const initialSyncEngineStatus: SyncEngineStatus = {
  status: 'offline',
  lastSyncedAt: null,
  pendingChangesCount: 0,
  branchId: null,
};
