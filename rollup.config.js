import path from "path";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

// Array of extensions to be handled by babel
const extensions = [".ts", ".tsx"];
const packageName = pkg.name;
const banner = `
  /**
   * @license
   * author: epignosis front-end team
   * ${packageName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default {
  input: "./src/index.ts",
  output: {
    name: packageName,
    // file: "index.js",
    dir: "dist",
    sourcemap: "inline",
    format: "es",
    preserveModules: true, // This one is important for treeshaking features of our library
    exports: "named",
    banner,
  },
  plugins: [
    commonjs(),
    alias({
      entries: [
        { find: "@theme", replacement: path.resolve(__dirname, "./src/theme") },
        { find: "@icons", replacement: path.resolve(__dirname, "./src/icons") },
      ],
    }),
    nodeResolve(),
    resolve({
      mainFields: ["module", "main"],
      // browser: true,
      jsnext: true,
      preferBuiltins: true,
      extensions,
    }), // Resolves node modules
    babel({
      extensions, // Compile our TypeScript files
      babelHelpers: "bundled", // Place babel helper functions in the same file they were used
      exclude: /node_modules/,
    }),
    peerDepsExternal({ extensions }), // https://rollupjs.org/guide/en/#peer-dependencies
    postcss({
      plugins: [],
    }),
    svgr(),
    json(),
  ],
  external: [...Object.keys(pkg.devDependencies || {})], // Excluded dependencies - dev dependencies
};
