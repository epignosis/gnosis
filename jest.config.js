const path = require("path");

module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  moduleDirectories: [path.resolve("./src"), "node_modules"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.tsx",
    "!<rootDir>/src/test-utils/**/*",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^types(.*)$": "<rootDir>/src/types$1",
    "@test-utils(.*)$": "<rootDir>/src/test-utils$1",
    "@theme(.*)$": "<rootDir>/src/theme$1",
    "\\.(css)$": "<rootDir>/src/test-utils/mocks/cssStub.ts", // Stub CSS files
    "\\.(svg)$": "<rootDir>/src/test-utils/mocks/svgStub.ts", // Stub SVG files
  },
};
