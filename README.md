## Terminal

`npx create-expo-app ./`

## _Auto installing dependencies_

## Terminal

- `npx expo start`
- Scan the QR code from Expo App

## Terminal

```
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

## Terminal

`npx tailwindcss init`

## `tailwind.config.js`

[Link](https://www.nativewind.dev/getting-started/installation)

```tsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Change `tsconfig.json`

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "app/_layout.tsx",
    "nativewind-env.d.ts",
    "types/**/*.d.ts"
  ]
}
```

## New CSS File `app (folder)`

[Link](https://www.nativewind.dev/getting-started/installation)

> `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Add Babel Preset `Root of Directory`

[Link](https://www.nativewind.dev/getting-started/installation)

> `babel.config.js`

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

## Terminal

`npx expo customize metro.config.js`

> Overwrite it with this:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

## New Root Directy File

> `nativewind-env-d.ts`

```ts
/// <reference types="nativewind/types" />
```

## change / confirm that `metro.config.js`

> the globabls styles needs to be correct
> `./app/globals.css`

### Tailwind.config.js

> - where you can add your theme colors (Primary root colors)
