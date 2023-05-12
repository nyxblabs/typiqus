import * as babel from '@babel/standalone/babel.min.js'
import typiqusPlugin from './babel'

const { transform: babelTransform } = babel.default || babel

export function transform(src: string, opts = {}) {
   const res = babelTransform(src, {
      filename: 'src.ts',
      presets: ['typescript'],
      plugins: [[typiqusPlugin, opts]],
   })
   return res.code
}
