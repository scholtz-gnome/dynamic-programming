export default {
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts',
  ],
  verbose: true,
  coverageDirectory: __dirname + '/tests/coverage',
};
