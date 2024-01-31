# Callback Functions

## first_load
- **Type:** `(params: CookiesStatus) => void`
- **Refs:** [CookiesStatus](../types/cookies-type.md#cookiesstatus-interface)
- **Description:** This function will be invoked when the user visits the page and has not neither accepted nor rejected the cookies message.
- **Example:**
  ```typescript
  first_load: (params: CookiesStatus) => {
    // Your implementation here
  }
  ```

## accept
- **Type:** `(params: CookiesStatus) => void`
- **Refs:** [CookiesStatus](../types/cookies-type.md#cookiesstatus-interface)
- **Description:** This function will be invoked when the user clicks on the accept all or accept settings buttons.
- **Example:**
  ```typescript
  accept: (params: CookiesStatus) => {
    // Your implementation here
  }
  ```

## reject
- **Type:** `(params: CookiesStatus) => void`
- **Refs:** [CookiesStatus](../types/cookies-type.md#cookiesstatus-interface)
- **Description:** This function will be invoked when the user clicks on the reject button.
- **Example:**
  ```typescript
  reject: (params: CookiesStatus) => {
    // Your implementation here
  }
  ```

## load
- **Type:** `(params: CookiesStatus) => void`
- **Refs:** [CookiesStatus](../types/cookies-type.md#cookiesstatus-interface)
- **Description:** This function will be invoked every time a user that interacted previously with the cookies message (accepting or rejecting) visits the page.
- **Example:**
  ```typescript
  load: (params: CookiesStatus) => {
    // Your implementation here
  }
  ```
