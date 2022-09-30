module.exports = {
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',

  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
