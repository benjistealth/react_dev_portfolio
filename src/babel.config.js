module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ['inline-import', {
        extensions: ['.png', '.jpg', '.gif']
      }]
    ]
  };
  