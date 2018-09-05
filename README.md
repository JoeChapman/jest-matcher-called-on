# Jest Matcher calledOn

[![Greenkeeper badge](https://badges.greenkeeper.io/JoeChapman/jest-matcher-called-on.svg)](https://greenkeeper.io/)

A Jest custom matcher that asserts a Spy or Stub was called on a given context, like `sinon.calledOn`

## Usage
```bash
$ npm i jest-matcher-called-on
```

In `<rootDir>/jest/customMatchers.js` add the following
```js
import calledOn from 'jest-matcher-called-on';

expect.extend(calledOn);
```

Then in `./package.json` add
```json
"jest": {
  "setupTestFrameworkScriptFile": "<rootDir>/jest/customMatchers.js"
}
```

And use in your tests like
```js
expect(spy).calledOn(obj);
```

## Scripts
```bash
$ npm t
```

```bash
$ npm run lint
```

Contributions and comments welcome.
