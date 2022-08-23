module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // pastas a serem ignoradas durante os testes
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'], // pasta que deve rodar antes de todos os testes
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  }, // extensões de arquivos que devem ser transformadas durante o processo
  testEnvironment: 'jsdom' // indicação de modelo de ambiente que o jest deve esperar
}
