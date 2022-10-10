module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/src/grammar/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',

  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
