import pkg from './package.json';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: "bld/es2015/index.js",
  output: {
    file: pkg.module,
    format: "es",
    exports: "named"
  },
  sourcemap: true,
  plugins: [
    sourcemaps()
  ],
  external: ["react", "react-dom"]
};
