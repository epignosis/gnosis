import path from "path";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";
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
  input: ["src/index.ts"], // What files we build?

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

    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),

    // Compile TypeScript/JavaScript files
    babel({
      extensions, // Compile our TypeScript files
      babelHelpers: "bundled",
      include: ["src/**/*"],
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

  output: {
    dir: "dist", // Directory where rollup.js will put the built files
    format: "esm", // Built files will follow ES Module format
    preserveModules: true, // This one is important for treeshaking features of our library
    preserveModulesRoot: "src",
    sourcemap: false, // We want a source map to trace the original code
    banner,
    globals: { react: "React", "react-dom": "ReactDOM" },
  },
};

// export default {
//   input: "./src/index.ts",
//   output: {
//     name: packageName,
//     // file: "index.js",
//     dir: "dist",
//     sourcemap: "inline",
//     format: "es",
//     preserveModules: true, // This one is important for treeshaking features of our library
//     exports: "named",
//     banner,
//   },
//   plugins: [
//     alias({
//       entries: [
//         { find: "@theme", replacement: path.resolve(__dirname, "./src/theme") },
//         { find: "@icons", replacement: path.resolve(__dirname, "./src/icons") },
//       ],
//     }),
//     commonjs({
//       sourceMap: false,
//     }),
//     nodeResolve({ browser: true }),
//     resolve({
//       mainFields: ["module", "main"],
//       // browser: true,
//       jsnext: true,
//       preferBuiltins: true,
//       extensions,
//     }), // Resolves node modules
//     babel({
//       extensions, // Compile our TypeScript files
//       babelHelpers: "bundled", // Place babel helper functions in the same file they were used
//       exclude: /node_modules/,
//     }),
//     peerDepsExternal({ extensions }), // https://rollupjs.org/guide/en/#peer-dependencies
//     postcss({
//       plugins: [],
//     }),
//     svgr(),
//     json(),
//   ],
//   external: [...Object.keys(pkg.devDependencies || {})], // Excluded dependencies - dev dependencies
// };
