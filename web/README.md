[![cover][cover-src]][cover-href]
[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] 
[![License][license-src]][license-href]

#  🧬 Typiqus

> 🔤 Empower your type handling with uniqueness and customization. Effortlessly create and manage tailored types for a robust and flexible codebase. 🚀

**▶️ Check [online playground](https://typiqus.nyxb.xyz)**

## 💾 Install

```sh
# nyxi
nyxi add typiqus

# pnpm
pnpm add typiqus

# npm
npm i typiqus

# yarn
yarn add typiqus
```

## 📚 Usage

First we have to define a reference object that describes types, defaults, and a `$resolve` method (normalizer).

```ts
const defaultPlanet = {
  name: 'earth',
  specs: {
    gravity: {
      $resolve: val => parseFloat(val),
      $default: '9.8'
    },
    moons: {
      $resolve: (val = ['moon']) => [].concat(val),
      $schema: {
        title: 'planet moons'
      }
    }
  }
}
```

## 🌐 API

### 🧩 `resolveSchema`

```ts
import { resolveSchema } from 'typiqus'

const schema = await resolveSchema(defaultPlanet)
```

🔍 Output:

```json
{
  "properties": {
    "name": {
      "type": "string",
      "default": "earth"
    },
    "specs": {
      "properties": {
        "gravity": {
          "default": 9.8,
          "type": "number"
        },
        "moons": {
          "title": "planet moons",
          "default": [
            "moon"
          ],
          "type": "array",
          "items": [
            {
              "type": "string"
            }
          ]
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}
```
### 🏭 `generateTypes`

```ts
import { resolveSchema, generateTypes } from 'typiqus'

const types = generateTypes(await resolveSchema(defaultPlanet))
```

🔍 Output:

```ts
interface Typiqus {
   /** @default "earth" */
  name: string,

  specs: {
    /** @default 9.8 */
    gravity: number,

    /**
     * planet moons
     * @default ["moon"]
    */
    moons: string[],
  },
}
```

### 📄 `generateMarkdown`

```ts
import { resolveSchema, generateMarkdown } from 'typiqus'

const markdown = generateMarkdown(await resolveSchema(defaultPlanet))
```

🔍 Output:

```markdown
# `name`
- **Type**: `string`
- **Default**: `"earth"`


# `specs`

## `gravity`
- **Type**: `number`
- **Default**: `9.8`


## `moons`
- **Type**: `array`
- **Default**: `["moon"]`
```

## 🌱 Development

- 🐙 Clone this repository
- 🔧 Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- 📦 Install dependencies using `nyxi`
- 🏃 Run interactive tests using `nyxr dev`
- 🏃 Run `nyxr web` to start playground website
- 🏃 Run `pnpm test` before push to ensure all tests and lint checks passing

## 📜 License

[MIT](./LICENSE) - Made with 💞

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/typiqus?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/typiqus
[npm-downloads-src]: https://img.shields.io/npm/dm/typiqus?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/typiqus
[bundle-src]: https://img.shields.io/bundlephobia/minzip/typiqus?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=typiqus
[license-src]: https://img.shields.io/github/license/nyxblabs/typiqus.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxblabs/typiqus/blob/main/LICENSE

<!-- Cover -->
[cover-src]: https://raw.githubusercontent.com/nyxblabs/typiqus/main/.github/assets/cover-github-typiqus.png
[cover-href]: https://💻nyxb.ws
