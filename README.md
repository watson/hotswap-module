# hotswap-module

Replace the return value of `require('some-module')` with the return
value of another module in any app without any code changes.

[![npm](https://img.shields.io/npm/v/hotswap-module.svg)](https://www.npmjs.com/package/hotswap-module)
[![build status](https://travis-ci.org/watson/hotswap-module.svg?branch=master)](https://travis-ci.org/watson/hotswap-module)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install hotswap-module --global
```

## CLI Usage

The following three commands all run the `script.js` file and replace
any call to `require('stream')` with `require('readable-stream')`.

If `hotswap-module` isn't installed, simply use npx to run it:

```sh
npx hotswap-module stream readable-stream script.js
```

If `hotswap-module` is installed globally:

```sh
hotswap-module stream readable-stream script.js
```

If `hotswap-module` is installed as a dependency:

```sh
HOTSWAP=stream,readable-stream node -r hotswap-module script.js
```

If the script for which you wish to hotswap a module is being started
indirectly, e.g via `npm test`, you can use the `NODE_OPTIONS`
environment variable to require the `hotswap-module`:

```sh
HOTSWAP=stream,readable-stream NODE_OPTIONS="-r hotswap-module" npm test
```

## Programmatic Usage

```js
const hotswap = require('hotswap-module')

// Call hotswap() with the name of the module you wish to replace and
// the exports object of the replacement module
hotswap('stream', require('readable-stream'))
```

## CLI API

```sh
hotswap-module <old-module> <new-module> <script>
```

## Programmatic API

### `hotswap(name, exports)`

Arguments:

- `name` - The name of the module you whish to replace
- `exports` - The new value of the modules exports object

It's important that you call the `hotswap` function before the module
defined by `name` is required for the first time.

## License

[MIT](https://github.com/watson/hotswap-module/blob/master/LICENSE)
