// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
process.env.TZ = 'AO';

module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '@test-suite': '<rootDir>/client/test-suite/index.tsx',
    '@components': '<rootDir>/client/components/index.ts',
    '@client/(.*)$': '<rootDir>/client/$1',
    '@constants': '<rootDir>/constants/index.ts',
    '@mocks': '<rootDir>/mocks/index.ts',
    '@styles/(.*)$': '<rootDir>/styles/$1',
    '@utils/(.*)$': '<rootDir>/utils/$1',
  },
};
