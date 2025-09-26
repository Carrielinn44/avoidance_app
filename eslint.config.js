// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
        // ... other configurations
      settings: {
        'import/resolver': {
          alias: {
            map: [
              ['@', './src'], // Adjust this based on your actual alias mapping
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png', '*.png', '.jpg', '*.jpg'], // Add .png
          },
          "typescript": {
                "alwaysTryTypes": true, // optional, for resolving .d.ts files
                "project": "./tsconfig.json" // or an array of tsconfig files
          },

        },
      },
    },
]);
