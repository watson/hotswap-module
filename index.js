'use strict'

const hook = require('require-in-the-middle')

module.exports = hotswap

if (process.env.HOTSWAP) {
  const args = process.env.HOTSWAP.split(',')
  hotswap(args[0], require(args[1]))
}

function hotswap (name, exports) {
  hook([name], () => exports)
}
