module.exports = {
  env: {
    "browser": true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
