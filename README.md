# Jest Matcher calledOn

A Jest custom matcher that asserts a Spy or Stub was called on a given context

## Usage
```bash
$ npm i jest-matcher-called-on
```

`<rootDir>/jest/customMatchers.js`

```js
import calledOn from 'jest-matcher-called-on';

expect.extend(calledOn);
```

```json
"jest": {
  "setupTestFrameworkScriptFile": "<rootDir>/jest/customMatchers.js"
}
```

## Scripts
```bash
$ npm t
```

```bash
$ npm run lint
```

Contributions and comments welcome.
