module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                
                targets: {
                    ...(process.env.NODE_ENV === 'test' ? {node: 'current'} : {}),
                    browsers: ['last 4 versions', 'safari >= 7', 'ie >= 9']
                }
            }
        ]
    ],
    plugins: [
      require('@babel/plugin-transform-spread'),
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-private-methods')
    ]
};