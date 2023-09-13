# SecureLD Activity Participant Context _(@secureld/activity-participant-context)_

[![Build status](https://img.shields.io/github/actions/workflow/status/dogwoodlogic/context-secureld-activity-participant/main.yml)](https://github.com/dogwoodlogic/context-secureld-activity-participant/actions/workflow/main.yml)
[![NPM Version](https://img.shields.io/npm/v/@secureld/activity-participant-context.svg)](https://npm.im/@secureld/activity-participant-context)

> A SecureLD Activity Participant JSON-LD context for JavaScript.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [License](#license)

## Install

- Requires Node.js 18+.

To install via NPM:

```sh
npm install @secureld/activity-participant-context
```

## Usage

```js
// ESM
import * as ctx from '@secureld/activity-participant-context';
// CommonJS
const ctx = require('@secureld/activity-participant-context');
const {contexts, constants, appContextMap} = ctx;

// Default context URL
ctx.CONTEXT_URL
// -> 'https://dogwoodlogic.github.io/...'

// Default context data
ctx.CONTEXT
// -> full context object

// Default codec term map value for CBOR-LD
ctx.constants.CBORLD_VALUE
// ->  0x0..
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:

- `CONTEXT_URL`: Default context URL.
- `CONTEXT`: Default context data.
- `CBORLD_VALUE`: Default codec term map value for [CBOR-LD][].
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps all context URLs to full context data.
- `appContextMap`: For use with the [cborld][] library.

## Status

- `https://dogwoodlogic.github.io/context-secureld-activity-participant/contexts/activity-participant-v1.jsonld`: Under development. Not stable.

## Developing

Source is available at:
- https://github.com/dogwoodlogic/context-secureld-activity-participant

**WARNING**: The `.jsonld` in `contexts/` is auto-generated by the `npm run
build` script, each time you run the test suite.

Do NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## License

- BSD 3-Clause © Dogwood Logic
- See the [LICENSE](./LICENSE) file for details.

[CBOR-LD]: https://digitalbazaar.github.io/cbor-ld-spec/
[cborld]: https://github.com/digitalbazaar/cborld
[webpack]: https://webpack.js.org/
