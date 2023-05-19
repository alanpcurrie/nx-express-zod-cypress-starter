/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');
export default {
    displayName: 'nx-express-zod-starter',
    preset: './jest.preset.js',
    testEnvironment: 'node',
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: './coverage/nx-express-zod-starter',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
    ],
};
