'use strict';
const walkSync = require('walk-sync');

module.exports = function inputs(plugin) {
  return plugin._inputNodes.map(node => {
    return {
      name: node.toString(),
      inputCount: node.inputPaths.length,
      fileCount: walkSync(node.ouputPath).length
    };
  });
}
