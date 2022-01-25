module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    ElectrodeFyiLevel: 'none',
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  resetMocks: true,
  restoreMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  rootDir: '.',
};
