import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
    preserveModules: true, // This one is important for treeshaking features of our library
  },
  plugins: [
    peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
    resolve(), // Resolves node modules
    alias({
      entries: [
        { find: "@atoms", replacement: "./src/atoms" },
        { find: "@components", replacement: "./src/components" },
        { find: "@test-utils", replacement: "./src/test-utils" },
        { find: "@theme", replacement: "./src/theme" },
        { find: "type", replacement: "./src/type" },
      ],
    }),
    babel({
      extensions: EXTENSIONS, // Compile our TypeScript files
      babelHelpers: "inline", // Place babel helper functions in the same file they were used
      include: EXTENSIONS.map((ext) => `src/**/*${ext}`),
    }),
  ],
  external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
};
