
// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es'
import license from 'rollup-plugin-license'
import { name, version, main, module, browser, author } from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

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
    }),
    isProduction && uglify({}, minify),
    license({
      banner: `
        ${name} v${version}
        Copyright 2018<%= moment().format('YYYY') > 2018 ? '-' + moment().format('YYYY') : null %> ${author}
      `
    })
  ]
}
