import type { SchemaPair, SchemaType } from './types';

export function extractTypesFromTS(code: string): SchemaPair['tsType'] {
  return code;
}

export function extractSchemasFromZod(code: string): SchemaPair['zodSchema'] {
  return code;
}

export function generateZodFromTS(typeDef: string): string {
  return `z.object(${typeDef})`;
}

export function generateTSFromZod(schema: string): string {
  return `type FromZod = z.infer<typeof ${schema}>`;
}