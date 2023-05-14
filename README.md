# Twee and Sugar Setup
This is a barebones project setup for users looking to create stories in Twee and SugarCube within their favorite text editor. This setup is recommended for experienced users who know their way around CLI, Typescript, and CSS preprocessors.

Optimized for SugarCube but it can be used for other Twine story formats.

Built with:
- Vite
- Tweego

Supports:
- Twine 1
- Twine 2
- All Twine story formats
- Typescript
- PostCSS
- Sass
- LESS
- Stylus

[Quickstart](#quickstart) - [Commmands](#commands) - [Structure](#structure) - [Configuration](#configuration) - [Tips](#tips) - [See more](#see) - [Acknowledgements](#acknowledgements) - [Contributions](#contributions)

## Requirements
- Node v18.15.0 or lower
  - This is because the Tweego binary included is incompatible with later versions
- NPM or Yarn 

## Quickstart
Clone or click the `Use Template` from this repository:
```sh
git clone https://github.com/rhyses-pieces/twee-and-sugar
```

Use either npm or yarn to install dependencies:
```sh
npm install
yarn install
```

To start developing:
```sh
npm start
yarn start
```

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Installs all dependencies |
| `npm start` | Starts the dev server |
| `npm run build` | Builds your project to `dist/` folder |
| `npm serve` | Preview the build locally before deploying |

## Structure

```
your-project-name/
├─ public/
│  ├─ fonts/
│  ├─ favicon.ico
├─ src/
│  ├─ assets/
│  │  ├─ images/
│  │  ├─ scripts/
│  │  ├─ styles/
│  │  ├─ vendor/
│  ├─ story/
│  │  ├─ _init.twee
│  │  ├─ _meta.twee
│  ├─ entry.ts
│  ├─ head.html
│  ├─ vite-env.d.ts
├─ index.html
├─ tsconfig.json
├─ vite.config.ts
```

Most of your work will live in the `src/` folder, and all of your story files will live in the `src/story` folder.

### `src/`
There are three important files here:

- `src/entry.ts` -- The entrypoint for all processed files from `src/assets`
  - This file mainly imports processed stylesheets from `src/assets/styles` as well as transpiled scripts from `src/assets/scripts`
- `src/head.html` -- Additional content in the `<head>` tag goes here
  - This can include additional libraries, like tooltip.js
  - Also control which built-in stylesheets to remove or include
  - **IMPORTANT NOTE:** Any changes made to this file will not be automatically reflected in the dev server, you'll have to manually restart the server every time this file changes
- `src/vite-env.d.ts` -- This provides type definitions for Vite, so it's recommended that you leave this alone 

#### `src/assets/`
This folder houses several different sub-folders:

- `src/assets/images` -- Any image, audio, video files can go here
- `src/assets/scripts` -- Custom scripts or macros can go here
   Compatible with:
    - Javascript
    - Typescript
- `src/assets/styles` -- Custom stylesheets can go here
   Compatible with:
    - CSS Modules
    - Less
    - PostCSS
    - Sass/SCSS
    - Stylus
  - See [tips](#using-different-css-extension-languages) for more info
- `src/assets/vendor` -- Third-party scripts or macros can go here
  - See [tips](#using-third-party-macros) for more info

#### `src/story`
Feel free to structure this folder however you like, but there is one thing that it needs to function properly:

- There must be a twee file that contains the `:: StoryData` passage with the required information
  - See the [official Tweego documentation](https://www.motoslave.net/tweego/docs/#special-passages-storydata) for more info

##### `src/story/_init.tw`
This file contains the structure for the story interface for the SugarCube story format. The entry point file `src/entry.ts` is referenced here as an example, but you can also include it in `src/head.html`. See [tips]() for more details.

### `index.html`
This is intentionally left blank so that Tweego can use it as an output file. **Any edits made in here will be lost** because Tweego will rebuild this file with new changes.

## Configuration
There are two files where you can configure the project's settings:

- `tsconfig.json` -- This is for Typescript settings
- `vite.config.ts` -- This is for Vite
  - It's recommended that you leave `server.watch.usePolling` alone if you're working in a WSL development environment. See [here](https://vitejs.dev/config/server-options.html#server-watch) for more details
  - See the [official Vite documentation](https://vitejs.dev/config/) for more info

## Tips

### Using different CSS extension languages
You can mix and match stylesheets by importing them into the `src/entry.ts` file. For example:

```js
import './assets/styles/style-one.sass';
import './assets/styles/style-two.less';
...
```

### Using third-party macros
To include a macro, simply drag and drop them into the `src/assets/vendor` folder.

As an example, to install the Typed.js module for SugarCube would follow these steps:
1. Download the archive for Typed.js from [here](https://www.motoslave.net/sugarcube/2/) under "Add-ons"
2. Unzip the contents of that folder
3. Move all contents (both script and stylesheet) of that folder to `src/assets/vendor`

### Referencing `src/entry.ts`
You need to reference the entry point file somewhere in your HTML files to be compiled through Tweego. For example, you can reference it in your `src/head.html` file like this:

```html
<script src="src/entry.ts" type="module"></script>
```

It must be referenced exactly in this format in your HTML files. You can also edit the `package.json` file in the root of your project to include a reference to the entry point file like this:

```json
"scripts": {
  ...
  "watch:tweego": "tweego -w -t -o index.html -m src/assets/vendor -m src/assets/scripts/some-html-file.html src/story --head=src/head.html",
  ...
}
```

The way the entry point file has been included is, admittedly, a little hacky. Please feel free to contribute any improvements or suggestions!

## Acknowledgements
Inspired by many great tools made with Twine, including:

- [Eigengrau-s-Essential-Establishment-Generator](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator) by ryceg
- [ChapelR's Tweego setup](https://github.com/ChapelR/tweego-setup)
- [nijikokun's SugarCube Starter](https://github.com/nijikokun/sugarcube-starter)

### Built with
- [Tweego](https://github.com/tmedwards/tweego)
  - [NPM binary](https://github.com/double-a-stories/tweego-bin)
- [Vite](https://vitejs.dev/)

## See
- [Tweego official documentation](https://www.motoslave.net/tweego/)
- [Twee v3 notation specs](https://github.com/iftechfoundation/twine-specs/blob/master/twee-3-specification.md)
- [Twine Cookbook](https://twinery.org/cookbook/)
- [Twine resources](https://twinelab.net/twine-resources/#/)
- [Vite official documentation](https://vitejs.dev/guide/)

## Contributions
.. are welcome! Please feel free to submit a PR, issue, suggestion, etc for this project. Give it a star if you use it in your own projects!
