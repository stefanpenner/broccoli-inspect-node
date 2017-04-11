'use strict';

const walkSync = require('walk-sync');

module.exports = function(node) {
  let name, outputPath;

  if (typeof node === 'string') {
    name = node;
    outputPath = node;
  } else {
    name = node.toString();
    outputPath = node.outputPath || node._directoryPath;
  }

  let fileCount = walkSync(outputPath).length;
  let inputCount = (node.inputPaths || []).length;

  return {
    name,
    inputCount,
    fileCount
  };
};

module.exports.ofPlugin = function(plugin) {
  return plugin._inputNodes.map(module.exports);
};

