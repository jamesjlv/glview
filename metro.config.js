const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    // babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs"],
    assetExts: ["glb", "gltf", "mtl", "obj", "png", "jpg", "mjs", "xpng"],
  };

  return config;
})();
