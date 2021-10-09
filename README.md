# vprops

Object property async validation

## Installation
```bash
npm install vprops
```

## Usage
```js
import vprops from 'vprops'

const myObject = {
    title: 'aaaa',
    getName: '',
    isMale: true
}

const myValidations = {
    title: 'string',
    getName: 'function',
    isMale: 'boolean',
}

(async () => {
    // Validate a single property
    const a = await eprop(myObject, myValidations, 'isMale')
    console.log(a.isValid) // true

    // Also can validate multiple properties
    console.log(b.areValid) // false

    // Validate all object properties
    const b = await eprop(myObject, myValidations)
    console.log(b.areValid) // false

    // Check if some properties are valid
    console.log(b.someValid) // true
})()
```