# Cookies Options

## Custom Cookies Parameters

Configure custom cookies to be displayed in the cookies settings window.

## name

- **Type:** `string`

Name by which the browser will identify the cookie. A name without spaces or special characters is recommended.

## title

- **Type:** `string`

Title or long name with which the cookie will be displayed in its description section.

## description

- **Type:** `string`

Text that will be shown in the settings window to describe the cookie. It is possible to specify HTML code.

## checked

- **Type:** `boolean`
- **Default:** `false`

Initial state of the cookie checkbox.

## disabled

- **Type:** `boolean`
- **Default:** `false`

Allows interaction with the checkbox.

## onLoad

- **Type:** `boolean`
- **Default:** `false`

Only applicable to a cookie associated with Google Analytics. Determines whether data collection is activated before the user has accepted or rejected cookies.

## code

- **Type:** `string`

Only applicable to a cookie associated with Google Analytics. Google Analytics code for the global site tag (gtag.js).

## cookies

- **Type:** `Array<Omit<Cookie, 'title' | 'description' | 'cookies'>> | undefined`
- **Default:** `undefined`

Define a list of cookies that will be accepted or rejected when the user accepts or rejects the parent cookie. The cookies in this list will not be displayed in the settings window.

This is useful for cookies that are not necessary for the operation of the website but that are used to collect data. For example, cookies from Google Analytics, Facebook Pixel, etc.

It is only allowed to define one level of cookies. That is, it is not possible to define cookies that have cookies associated with them.
