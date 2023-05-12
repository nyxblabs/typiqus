import { nyxdefaults } from 'nyxdefaults'
import dynot from 'dynot'
import { resolveSchema } from '../schema'
import type { Schema } from '../types'
import typiqusPlugin from './babel'

type DYNOTOptions = Parameters<typeof dynot>[1]

export interface LoaderOptions {
   dynot?: DYNOTOptions
   defaults?: Record<string, any>
   ignoreDefaults?: boolean
}

export async function loadSchema(
   entryPath: string,
   options: LoaderOptions = {},
): Promise<Schema> {
   const _dynotRequire = dynot(
      process.cwd(),
      nyxdefaults(options.dynot, {
         esmResolve: true,
         interopDefault: true,
         transformOptions: {
            babel: {
               plugins: [[typiqusPlugin, { experimentalFunctions: true }]],
            },
         },
      }),
   )

   const resolvedEntryPath = _dynotRequire.resolve(entryPath)
   const rawSchema = _dynotRequire(resolvedEntryPath)
   const schema = await resolveSchema(rawSchema, options.defaults, {
      ignoreDefaults: options.ignoreDefaults,
   })

   return schema
}
