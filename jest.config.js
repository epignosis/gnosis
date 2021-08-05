const path = require("path");

module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testEnvironment: "jest-environment-jsdom",
  globals: {
    ENV: "staging",
  },
  testMatch: [
    "**/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleDirectories: [path.resolve("./src"), "node_modules"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.stories.tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/test-utils/cssStub.ts", // Stub CSS files
  },
};
