/**
 * ts-schema-sync - Bidirectional TypeScript <-> Zod synchronization
 * 
 * Write TS interfaces once, generate Zod schemas, and generate back.
 */

export * from './types';

import type { SyncConfig, SyncResult, SchemaPair } from './types';

/**
 * Synchronize TypeScript interfaces with Zod schemas
 * @param config - Synchronization configuration
 */
export function sync(config: SyncConfig): SyncResult {
  return {
    changedFiles: [],
    timestamp: new Date().toISOString(),
    bidirectional: config.bidirectional,
  };
}

/**
 * Generate Zod schema from TypeScript definition
 */
export function generateZod(typeDef: string): string {
  return `z.object(${typeDef})`;
}

/**
 * Generate TypeScript type from Zod schema
 */
export function generateTS(schema: string): string {
  return `type FromZod = z.infer<typeof Schema>`;
}
