# Shared Options

<<< ../../src/types/index.ts#params

## expirationDays

- **Type:** `number`

Specifies the number of days the cookie will be valid. If not specified, the cookie is deleted when the browser is closed.

## path

- **Type:** `string`
- **Default:** `"/"`

Tells the browser what path to the directory the cookie belongs to.

## sameSite

- **Type:** `'strict' | 'lax' | 'none'`
- **Default:** `'lax'`
- **Reference:** [SameSite cookies – HTTP - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

Allows you to declare if your cookie should be restricted to a first-party or same-site context.

## position

- **Type:** `PositionType`
- **Values:** `top`, `top-left`, `top-right`, `top-center`, `bottom`, `bottom-left`, `bottom-right`, `bottom-center`.
- **Default:** `bottom-left`

Position where the cookies message will be placed.

## btnDismissPosition

- **Type:** `ButtonDismissPositionType`
- **Values:** `top-left`, `top-right`, `bottom-left`, `bottom-right`.
- **Default:** `bottom-left`

Position where the dismiss button will be placed.

## buttons

- **Type:** `ButtonType[]`
- **Values:** `accept`, `reject`, `settings`, `info`, `dismiss`.
- **Default:** `['accept']`

List of buttons that will be shown. The order in the array determines the order in which the buttons will be displayed.

## ignorePages

- **Type:** `string[]`

List of pages that will be excluded from showing the cookies message.

## hideDescription

- **Type:** `boolean`
- **Default:** `true`

Determines if the description of the cookies in the settings window appears collapsed or visible.

## mainWindowSettings

- **Type:** `boolean`
- **Default:** `false`

Set the settings window as the main. This window will be displayed when the page is accessed for the first time or when we click on the dismiss button to configure cookies.

## animation

- **Type:** `boolean`
- **Default:** `true`

Determines if the window will be shown with an animation. This does not affect the information and settings windows.

## content

- **Type:** [`Content`](../types/content-type.md)
- **Reference:** [Content Options](./content-options.md)
- **Example:**

<<< ../../src/examples/main.ts#content

Parameters that define the message content.

## cookies

- **Type:** [`Cookie[]`](../types/cookies-type.md)
- **Reference:** [Cookies Options](./cookies-options.md)
- **Example:**

<<< ../../src/examples/main.ts#cookies

Parameters that define the custom cookies.

## callback

- **Type:** [`Callback`](../types/callback-type.md)
- **Reference:** [Callback Functions](./callback-functions.md)

Functions that will be invoked after some events: first load, every load, after accepting cookies, and after rejecting cookies. Callback functions allow us to control the actions that must be executed depending on the state of the cookies.

## theme

- **Type:** `darkTheme | contrastTheme | smoothTheme | undefined`
- **Default:** `undefined`

Theme that will be applied to the cookies consent. Need to import module and add to the configuration.
