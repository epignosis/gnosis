import path from "path";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import { createRequire } from "module";
import postcss from "rollup-plugin-postcss";


const require = createRequire(import.meta.url);
const pkg = require("./package.json");

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

const plugins = [
  resolve({ extensions, browser: true }), // Allows node_modules resolution
  babel({
    extensions,
    babelHelpers: "bundled",
    exclude: ["node_modules/**", "**.test.**"],
    configFile: path.resolve(__dirname, "babel.config.json"),
  }),
  // Allow bundling cjs modules. Rollup doesn't understand cjs
  commonjs({
    include: "**/node_modules/**",
    extensions,
  }),
  postcss(),
  svgr(),
  json(),
  alias({
    entries: [{ find: "@theme", replacement: path.resolve(__dirname, "./src/theme") }],
  }),
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/esm",
        format: "es",
        preserveModules: true,
        sourcemap: true,
        banner,
        globals: { react: "React", "react-dom": "ReactDOM" },
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
        banner,
        entryFileNames: "[name].cjs",
        chunkFileNames: "[name]-[hash].cjs",
        globals: { react: "React", "react-dom": "ReactDOM" },
      },
    ],
    external: Object.keys(pkg.devDependencies),
    plugins,
  },
  {
    input: "src/icons/index.ts",
    output: [
      {
        dir: "icons",
        format: "cjs",
        banner,
        entryFileNames: "[name].cjs",
        chunkFileNames: "[name]-[hash].cjs",
      },
    ],
    external: Object.keys(pkg.devDependencies),
    plugins,
  },
];
