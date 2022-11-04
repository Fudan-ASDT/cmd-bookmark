module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/src/grammar/', '/src/util/closecallback.ts', '/src/cmd/'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',

  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
