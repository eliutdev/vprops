# vprops
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Object property async type validation

## Installation
```bash
npm i @reliutg/vprops
```

## Usage
```js
import { vprops } from '@reliutg/vprops'

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
    const a = await vprops(myObject, myValidations, 'isMale')
    console.log(a.isValid) // true

    // Also can validate multiple properties
    console.log(b.areValid) // false

    // Validate all object properties
    const b = await vprops(myObject, myValidations)
    console.log(b.areValid) // false

    // Check if some properties are valid
    console.log(b.someValid) // true
})()
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/rafaelaqueiroz21/"><img src="https://avatars.githubusercontent.com/u/42815135?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafaela Queiroz</b></sub></a><br /><a href="https://github.com/eliutgon/vprops/commits?author=rafaelaqueirozg" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!