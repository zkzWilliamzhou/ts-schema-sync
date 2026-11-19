/**
 * Type definitions for ts-schema-sync
 * Bidirectional TypeScript <-> Zod synchronization
 */

export type SchemaType = 'ts' | 'zod';

export interface SyncConfig {
  projectRoot: string;
  tsFilePattern: string;
  zodFilePattern: string;
  bidirectional: boolean;
}

export interface SchemaPair {
  tsPath: string;
  zodPath: string;
  tsType?: string;
  zodSchema?: string;
}

export interface SyncResult {
  changedFiles: string[];
  timestamp: string;
  bidirectional: boolean;
}
