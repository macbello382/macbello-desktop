/**
 * Macbello Desktop - Local SQLite Database Layer
 *
 * Prepared for offline-first multi-branch salon operations.
 * NOTE: Actual table migrations, SQLite engine bindings, and queries will be initialized
 * in subsequent database setup stages.
 */

export interface DatabaseConfig {
  filename: string;
  inMemory?: boolean;
  verbose?: boolean;
}

export interface DatabaseStatus {
  initialized: boolean;
  path: string;
  tablesCount: number;
}

export const defaultDatabaseConfig: DatabaseConfig = {
  filename: 'macbello_local.db',
  inMemory: false,
  verbose: process.env.NODE_ENV === 'development',
};

export class LocalDatabaseManager {
  private config: DatabaseConfig;
  private isInitialized = false;

  constructor(config: DatabaseConfig = defaultDatabaseConfig) {
    this.config = config;
  }

  public async getStatus(): Promise<DatabaseStatus> {
    return {
      initialized: this.isInitialized,
      path: this.config.filename,
      tablesCount: 0,
    };
  }
}

export const localDbManager = new LocalDatabaseManager();
