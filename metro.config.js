// https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Zustand's ESM build (zustand/esm/middleware.mjs) contains `import.meta.env`
// which causes "Cannot use 'import.meta' outside a module" in the web bundle.
// Forcing 'react-native' condition before 'import' makes Zustand resolve to its
// CJS build instead, which has no import.meta usage.
config.resolver.unstable_conditionNames = [
  'react-native',
  'require',
  'default',
];

module.exports = config;
