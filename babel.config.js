const TransformSpread = require('@babel/plugin-transform-spread');
const ClassProperties = require('@babel/plugin-proposal-class-properties');
const TransformTypescript = require('@babel/plugin-transform-typescript');

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets:
          '> 0.15%, not dead, maintained node versions, not op_mini all, not IE >= 0',
      },
    ],
  ],
  plugins: [TransformTypescript, TransformSpread, ClassProperties],
};
