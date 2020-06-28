const TransformSpread = require('@babel/plugin-transform-spread');
const ClassProperties = require('@babel/plugin-proposal-class-properties');
const TransformTypescript = require('@babel/plugin-transform-typescript');

module.exports = {
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                targets: {
                    ...(process.env.NODE_ENV === 'test' ? {node: 'current'} : {}),
                    browsers: ['> 0.25%', 'not dead', 'not op_mini >= 0', 'not IE < 11', 'not IE_Mob <= 11'],
                    node: '14',
                },
            },
        ],
    ],
    plugins: [
        TransformTypescript,
        TransformSpread,
        ClassProperties,
    ],
};
