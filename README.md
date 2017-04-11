# broccoli-inspect-node

Utility to inspect one or many broccoli nodes

```js
const inspectNode = require('inspect-node');
inspectNode(node) // => { name, fileCount, inputCount}
```

```js
const inspectNode = require('inspect-node');
inspectNode.ofPlugin(plugin) // => [{ name, fileCount, inputCount}, ...]
```
