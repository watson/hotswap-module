#!/usr/bin/env node
'use strict'

const args = process.argv.slice(2)
const oldModule = args[0]
const newModule = args[1]
const script = args[2]

if (!oldModule || !newModule || !script || oldModule === '--help') {
  console.log('Usage:')
  console.log('  hotswap-module <old-module> <new-module> <script>')
  console.log('')
  console.log('Example:')
  console.log('  hotswap-module stream readable-stream script.js')
  process.exit(1)
}

// patch require
require('./')(oldModule, require('import-cwd')(newModule))

// run script
require(require('path').join(process.cwd(), script))
