# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.

Cookies Consent can be installed via your favorite package manager.

::: code-group

```sh [npm]
$ npm install @metamorfosilab/cookies-consent
```

```sh [pnpm]
$ pnpm install @metamorfosilab/cookies-consent
```

```sh [yarn]
$ yarn add @metamorfosilab/cookies-consent
```

```sh [bun]
$ bun add @metamorfosilab/cookies-consent
```

:::

## Usage

### Linking styles

Cookies Consent comes with a default stylesheet that you can include in your project.

::: code-group

```postcss [postcss]
@import '@metamorfosilab/cookies-consent/dist/cookies-consent.css';
```

```scss [scss]
@import '~@metamorfosilab/cookies-consent/dist/cookies-consent.css';
```

```css [css]
@import '@metamorfosilab/cookies-consent/dist/cookies-consent.css';
```

:::

Also, you can import predefined themes. There are three themes available: [contrast](./theme-contrast.md), [dark](./theme-dark.md), and [smooth](./theme-smooth.md).

### Importing the library

You can import the library in your project using the following syntax:

```js
import { CookiesConsent } from '@metamorfosilab/cookies-consent'
```

### Creating a new instance

To create a new instance of the library, you need to pass a configuration object to the constructor.

```js
const cookiesConsent = new CookiesConsent({
  // Configuration object
})
```
