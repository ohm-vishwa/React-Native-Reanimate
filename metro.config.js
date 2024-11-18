// metro.config.js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Step 1: Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Step 2: Create any custom configuration
const customConfig = {
  // Add custom Metro options here if needed
};

// Step 3: Merge the default config with custom options
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Step 4: Wrap the merged config with Reanimated's configuration
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
