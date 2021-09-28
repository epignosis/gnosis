import path from "path";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

// Array of extensions to be handled by babel
const extensions = [".js", ".jsx", ".ts", ".tsx"];
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
  input: "src/index.ts", // What files we build?

  output: {
    dir: "dist", // Directory where rollup.js will put the built files
    format: "esm", // Built files will follow ES Module format
    preserveModules: true, // This one is important for treeshaking features of our library
    preserveModulesRoot: "src",
    sourcemap: false, // We want a source map to trace the original code
    banner,
    globals: { react: "React", "react-dom": "ReactDOM" },
  },

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#peer-dependencies
  external: Object.keys(pkg.devDependencies),

  plugins: [
    // Allows node_modules resolution
    resolve({ jsnext: true, extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs({
      include: "**/node_modules/**",
    }),

    // Compile TypeScript/JavaScript files
    babel({
      extensions, // Compile our TypeScript files
      babelHelpers: "bundled",
      exclude: ["node_modules/**"],
      configFile: path.resolve(__dirname, "babel.config.json"),
    }),

    postcss(),
    svgr(),
    json(),
    alias({
      entries: [
        { find: "@theme", replacement: path.resolve(__dirname, "./src/theme") },
        { find: "@icons", replacement: path.resolve(__dirname, "./src/icons") },
      ],
    }),
  ],
};
