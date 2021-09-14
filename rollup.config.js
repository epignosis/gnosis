import path from "path";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

// Array of extensions to be handled by babel
const extensions = [".ts", ".tsx"];
const banner = `
  /**
   * @license
   * author: epignosis front-end team
   * ${pkg.name}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default {
  input: ["src/components/index.ts"],
  output: {
    // file: "index.js",
    dir: "dist",
    sourcemap: "inline",
    format: "esm",
    preserveModules: true, // This one is important for treeshaking features of our library
    exports: "named",
    banner,
  },
  plugins: [
    commonjs(),
    postcss({
      plugins: [],
    }),
    peerDepsExternal({ extensions }), // https://rollupjs.org/guide/en/#peer-dependencies
    resolve({
      browser: true,
      extensions,
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }), // Resolves node modules
    alias({
      entries: [
        { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
        { find: "@test-utils", replacement: path.resolve(__dirname, "./src/test-utils") },
        { find: "@theme", replacement: path.resolve(__dirname, "./src/theme") },
        { find: "@icons", replacement: path.resolve(__dirname, "./src/icons") },
        { find: "types", replacement: path.resolve(__dirname, "./src/types") },
      ],
    }),
    babel({
      extensions, // Compile our TypeScript files
      babelHelpers: "inline", // Place babel helper functions in the same file they were used
      // include: extensions.map((ext) => `src/**/*${ext}`),
      exclude: "./node_modules/**",
    }),
    svgr(),
  ],
  external: [...Object.keys(pkg.devDependencies || {})], // Excluded dependencies - dev dependencies
};
