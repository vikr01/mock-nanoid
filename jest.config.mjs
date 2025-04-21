export default {
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|js)$': 'babel-jest',
    },
    testPathIgnorePatterns: [
        'node_modules/(?!(nanoid)/)',
        '/dist/'
    ],
};
