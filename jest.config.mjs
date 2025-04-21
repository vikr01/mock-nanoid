export default {
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|js)$': 'ts-jest',
    },
    testPathIgnorePatterns: [
        'node_modules/(?!(nanoid)/)',
        '/dist/'
    ],
};
