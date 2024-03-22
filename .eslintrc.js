const OFF = 0
const WARN = 1
const ERROR = 2
 
module.exports = {
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js'],
  
};