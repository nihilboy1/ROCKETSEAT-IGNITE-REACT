module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // pastas a serem ignoradas durante os testes
  testEnvironment: 'jsdom', // indicação de modelo de ambiente que o jest deve esperar
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'], // pasta que deve rodar antes de todos os testes
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  }, // extensões de arquivos que devem ser transformadas durante o processo
  moduleNameMapper: {
    '\\.(scss|css|sass)$': 'identity-obj-proxy'
  } // serve para fazer parse dos módulos de estilo importados dentro dos componentes
}
