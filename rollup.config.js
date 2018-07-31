
// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
import { name, main, module, browser } from './package.json'

export default {
  input: './src/index.ts',
  output: [{
    file: main,
    globals: [ 'ms' ],
    format: 'cjs'
  }, {
    file: module,
    globals: [ 'ms' ],
    name: name,
    format: 'es'
  }, {
    file: browser,
    globals: [ 'ms' ],
    name: name,
    format: 'umd'
  }],
  external: [ 'ms' ],

  plugins: [
    json(),
    resolve({
      jsnext: true,
      main: true
    }),
    typescript({
      typescript: require('typescript')
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: [ '.js' ],
      ignoreGlobal: false,
      sourceMap: false
    })
    // uglify()
  ]
}
