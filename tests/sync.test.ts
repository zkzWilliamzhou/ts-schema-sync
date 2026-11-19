import { describe, it, expect } from 'vitest';
import { sync, generateZod, generateTS } from '../src/index';
import type { SyncConfig } from '../src/types';

describe('ts-schema-sync', () => {
  it('syncs schemas bidirectionally', () => {
    const config: SyncConfig = {
      projectRoot: './test',
      tsFilePattern: '**/*.ts',
      zodFilePattern: '**/*.zod.ts',
      bidirectional: true,
    };
    const result = sync(config);
    expect(result.bidirectional).toBe(true);
  });

  it('generates zod from ts', () => {
    const tsDef = '{ name: z.string(), age: z.number() }';
    const zod = generateZod(tsDef);
    expect(zod).toContain('z.object');
  });

  it('generates ts from zod', () => {
    const zod = 'z.object({ name: z.string() })';
    const ts = generateTS(zod);
    expect(ts).toContain('z.infer');
  });
});
