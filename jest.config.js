// Document: https://jestjs.io/ja/docs/configuration

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  /**
   * Default: undefined
   * A preset that is used as a base for Jest's configuration.
   * A preset should point to an npm module that has a jest-preset.json, jest-preset.js, jest-preset.cjs or jest-preset.mjs file at the root.
   */

  roots: [
    '<rootDir>/src/', 
    '<rootDir>/tests/'
  ],
  /**
   * Default: ["<rootDir>"]
   * There are times where you only want Jest to search in a single sub-directory (such as cases where you have a src/ directory in your repo), but prevent it from accessing the rest of the repo.
   */

  testEnvironment: 'node',
  /**
   * Default: 'node'
   * The test environment that will be used for testing.
   * The default environment in Jest is a Node.js environment.
   * If you are building a web app, you can use a browser-like environment through jsdom instead.
   */

  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/src/$1'
  },
  /**
   * Default: null
   * A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module.
   * Modules that are mapped to an alias are unmocked by default, regardless of whether automocking is enabled or not.
   * Use <rootDir> string token to refer to rootDir value if you want to use file paths.
   * Additionally, you can substitute captured regex groups using numbered backreferences.
   */

  testMatch: [
    '**/tests/**/*.test.ts',
  ], 
  /**
   * The glob patterns Jest uses to detect test files.
   * By default it looks for .js, .jsx, .ts and .tsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js or Component.spec.js). 
   * It will also find files called test.js or spec.js.
   */

  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  /**
   * Default: {"\\.[jt]sx?$": "babel-jest"}
   * A map from regular expressions to paths to transformers.
   * A transformer is a module that provides a synchronous function for transforming source files.
   */

  globals: {
    'ts-jest': {
      'tsConfig': 'tsconfig.json'
    }
  }
  /**
   * Default: {}
   * A set of global variables that need to be available in all test environments.
   */
};