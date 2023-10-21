/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/test/setupFilesAfterEnv.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/@types/',
    '<rootDir>/src/docs/',
    '<rootDir>/src/graphql/',
    '<rootDir>/src/test/',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/.github/',
  ],
};