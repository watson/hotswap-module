'use strict'

const assert = require('assert')
const hotswap = require('../')

hotswap('http', require('https'))

assert.equal(require('http'), require('https'))
