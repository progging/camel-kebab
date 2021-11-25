# CAMEL-KEBAB

> Change your casing from something sensible to camel-Kebab-Case! Don't use this

## Install

`npm i -S camel-kebab` or `yarn add camel-kebab`

## Usage

Transforms strings with spaces, camel-casing, kebab-casing or Pascal casing to camel-kebab case.

```typescript
import { camelKebab } from 'camel-kebab'

const sensibleStrings = [
  'a sensible string',
  'anotherSensibleString',
  'Yet Another Sensible String',
  'this-string-is-a-sensible-kebab',
]

const unsensibleStrings = sensibleStrings.map((str) => camelKebab(str))

console.log(unsensibleStrings)
/*
    [
        'a-Sensible-String',
        'another-Sensible-String',
        'yet-Another-Sensible-String',
        'this-String-Is-A-Sensible-Kebab'
    ]
*/
```

## Test

`npm i && npm t`

## License

MIT
