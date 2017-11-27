import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: "src/index.js",
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  sourcemap: true,
  plugins: [
    sourcemaps(),
    nodeResolve({
      browser: true
    }),
    commonjs({
      namedExports: {
        // :-(
        '../../node_modules/react/index.js': ['Component', 'createElement']
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    })
  ]
};
