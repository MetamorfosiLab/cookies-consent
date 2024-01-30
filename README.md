# @metamorfosilab/cookies-consent

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

**Cookies Consent JS** is an easy-to-use javascript library to show the cookies consent message and manage the users consent according to the cookies law GDPR and ePrivacy Directive.

You can easily customize the design by changing the theme or creating a new one and it is ready to use with **Google Analytics** and **Google Tag Manager**.

# Basic usage

```bash
npm i @metamorfosilab/cookies-consent
```

```bash
pnpm i @metamorfosilab/cookies-consent
```

```bash
yarn add @metamorfosilab/cookies-consent
```

```js
import { CookiesConsent } from '@metamorfosilab/cookies-consent'

const cc = CookiesConsent({ parameters })
```

```postcss
@import '@metamorfosilab/cookies-consent/dist/styles/main.css';
```

## Example

```js
const cc = CookiesConsentJS({
  expirationDays: 365,
  buttons: ['reject', 'accept'],

  content: {
    title: 'This website is using Cookies!',
    message: '<p>This web uses 3rd party cookies for statistical purposes that help us to improve the user experience.</p>',
    policy: 'Privacy Policy',
    policyLink: 'https://gdpr-info.eu/'
  },

  cookies: {
    my_first_cookie: {
      name: 'my_first_cookie',
      title: 'My first cookie',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>',
    }
  }
})
```

## Themes

You can use one of the predefined themes or create your own by calling its stylesheet before calling the main stylesheet library.

```postcss
@import '@metamorfosilab/cookies-consent/dist/themes/theme-dark.css';
@import '@metamorfosilab/cookies-consent/dist/styles/main.css';
```

[Take a look at the themes](https://www.oxterisk.com/projects/cookies-consent-js/ccjs-examples/ccjs-themes/)

# Parameters

## General configuration

Key | Description | Values
--- | --- | --- |
expirationDays | Specifies the number of days the cookie will be valid. If not specified, the cookie is deleted when the browser is closed.
path | Tells the browser what path to the directory the cookie belongs to. | Absolute path.<br>Default: “/”
sameSite | Allows you to declare if your cookie should be restricted to a first-party or same-site context.<br>[SameSite cookies – HTTP - MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) | lax, static, none<br>Default: lax
position | Position where the cookies message will be placed. | top, top-left, top-right, top-center, bottom, bottom-left, bottom-right, bottom-center.<br>Default: bottom-left
btnDismissPosition | Position where the dismiss button will be placed. | top-left, top-right, bottom-left, bottom-right<br>Default: bottom-left
buttons | List of buttons that will be shown. The order in the array determines the order in which the buttons will be displayed. | accept, reject, settings, info, dismiss<br>Default: accept
ignorePages | List of pages that will be exluded of showing the cookies message. | string[]
hideDescription | Determines if the description of the cookies in the settings window appears collapsed or visible. | true, false<br>Default: true
mainWindowSettings | Set the settings window as the main. This window will be displayed when the page is accessed for the first time or when we click on the dismiss button to configure cookies. | true, false<br>Default: false
animation | Determines if the window will be shown with an animation. This does not affect the information and settings windows. | true, false<br>Default: true
content | Parameters that define the message content. | See below
cookies | Parameters that define the custom cookies. | See below
callback | Functions that will be invoked after some events: first load, every load, after accepting cookies and after rejecting cookies. Callback functions allow us to control the actions that must be executed depending on the state of the cookies. | See below

## Content parameters

Configure the contents of the cookies message window.

Key | Description | Values
--- | --- | --- |
title | Title of the cookies message. | Default: Cookies compliance
message | Text of the cookies message. | Default: We use cookies
align | Alignment of the content (title and message, not buttons). | left, right, center<br>Default: left
policy | Text for the privacy policy link. If it is not specified it will not be shown.
policyLink | Link to the privacy policy. If it is not specified the text will not be shown.
btnAccept | Text for the accept button. By clicking this button all the cookies will be accepted. | Default: “Accept all”
btnReject | Text for the reject button. By clicking this button all the cookies will be rejected. | Default: “Reject all”
btnDismiss | Text for the dismiss button. This button is shown when the cookies message is accepted or rejected. By clicking this button the cookies message will be shown. | Default: “Cookies policy”
btnSettings | Text for the settings button. By clicking this button the settings window will be open to select custom cookies. | Default: “Settings”
settingsHeader | Text that will be shown in the header of the settings window. It is possible to specify HTML code. |
settingsFooter | Text that will be shown in the footer of the settings window. It is possible to specify HTML code. |
btnSettingsSelectAll | Text for the **select all** button placed in the settings window. | Default: “Select all”
btnSettingsUnselectAll | Text for the **unselect all** button placed in the settings window. | Default: “Unselect all”
btnSettingsAccept | Text for the accept selection button placed in the settings window. | Default: “Accept selection”
btnInfo | Text for the **information** button. By clicking this button the information window will be open. | Default: “More info”
info | Text that will be shown in the information window. It is possible to specify HTML code.

## Custom cookies parameters

Key | Description | Values
--- | --- | --- |
name | Name by which the browser will identify the cookie. A name without spaces or special characters is recommended. | The **cc_ga** and **cc_gtm** names are reserved to associate the cookie to Google Analytics and Google Tag Manager services.
title | Title or long name with which the cookie will be displayed in its description section.
description | Text that will be shown in the settings window to describe the cookie. It is possible to specify HTML code.
checked | Initial state of the cookie checkbox. | true, false<br>Default: false
disabled | Allows to interact or not with the checkbox. | true, false<br>Default: false
onLoad | Only applicable to a cookie associated to Google Analytics. Determines whether data collection is activated before the user has accepted or rejected cookies. | true, false<br>Default: false
code | Only applicable to a cookie associated to Google Analytics. Google Analytics code for global site tag (gtag.js).

**Example**

```HTML
cookies : {
    profile : {
        name : "profile",
        title : "Profile cookies",
        description : "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>",
    },
    preferences : {
        name : "prefs",
        title : "Preference cookies",
        description : "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>",
        checked : true,
        disabled : true,
    },
    cc_ga : {
        name : "cc_ga",
        title : "Google Analytics",
        description : "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus facilisis sociis.</p>",
        code : "G-XXXXXXXXX"
    }
}
```

When using a Google Analytics service it is necessary to call the **cc-ga.js** module before the main library. [See example](https://www.oxterisk.com/projects/cookies-consent-js/ccjs-examples/ccjs-google-analytics-cookie/)

```HTML
<script src="modules/cc-ga.js"></script>
<script src="cookiesconsent.min.js"></script>
```

When using Google Tag Manager service it is necessary to call the **cc-gtm.js** module before the main library. [See example](https://www.oxterisk.com/projects/cookies-consent-js/ccjs-examples/ccjs-google-tag-manager-cookie/)

```HTML
<script src="modules/cc-gtm.js"></script>
<script src="cookiesconsent.min.js"></script>
```

Google third party services are activated and deactivated by removing their scripts from the website according to the visitor's choice but the data collecting settings of these services will depend on the administrator of the website from the google panels.

# Callback functions

Key | Description
--- | --- |
first_load | This function will be invoked when the user visits the page and has not neither accepted nor rejected the cookies message.
accept | This function will be invoked when the user clicks on the accept all or accept settings buttons.
reject | This function will be invoked when the user clicks on the reject button.
load | This function will be invoked every time a user that interacted previously with the cookies message (accepting or rejecting) visits the page.

[See example](https://www.oxterisk.com/projects/cookies-consent-js/ccjs-examples/ccjs-callback-functions/)

# Methods

Key | Description
--- | --- |
getStatus() | Returns true or false depending on whether the cookies message has ben answered or not.
getConfig() | Returns the whole cookies consent configuration.
showMessage() | Shows the cookies message.
removeCookies() | Remove all the cookies created for this page.

# Previews

[Take a look at the themes](https://www.oxterisk.com/projects/cookies-consent-js/ccjs-examples/ccjs-themes/)

![Default and dark themes](https://www.oxterisk.com/wp-content/uploads/2022/06/preview-message-different-themes.jpg)

**Settings window**
![Settings window](https://www.oxterisk.com/wp-content/uploads/2022/06/cc-settings-margin.jpg)

## Thanks!

Thank to original author [Oscar Oxterisk](https://github.com/oxterisk) for his work on [cookiesconsentjs](https://github.com/oxterisk/cookiesconsentjs), we just want to continue his work and make it more flexible and customizable.

## License

[MIT](./LICENSE) License © 2024-PRESENT [Metamorfosi Lab](https://github.com/MetamorfosiLab)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@metamorfosilab/cookies-consent?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@metamorfosilab/cookies-consent
[npm-downloads-src]: https://img.shields.io/npm/dm/@metamorfosilab/cookies-consent?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@metamorfosilab/cookies-consent
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@metamorfosilab/cookies-consent?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@metamorfosilab/cookies-consent
[license-src]: https://img.shields.io/github/license/@metamorfosilab/cookies-consent.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/@metamorfosilab/cookies-consent/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@metamorfosilab/cookies-consent
