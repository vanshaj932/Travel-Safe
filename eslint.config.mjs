import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    eslintConfigPrettier,  // Add Prettier config
  ],
  plugins: [eslintPluginPrettier],  // Enable Prettier plugin
  rules: {
    'prettier/prettier': 'error',  // Enable Prettier formatting rules
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
