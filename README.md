# codemirror-gcode-language

***

G-Code Language Support for CodeMirror 6

## Overview

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

This support language includes syntax highlighting for the G-Code language.

There is also support for tooltip hovering so when a command is hovered over a description of what that command does will be displayed.

## Installation

[gcode-lang-codemirror](https://github.com/oneislandearth/gcode-lang-codemirror) is available through the [npm registry](https://www.npmjs.com/package/gcode-lang-codemirror):

```bash
$ npm install gcode-lang-codemirror
```

## Usage

Example usage with a basic editor and G-Code language suport<br>

###### editor.js

```js
// Import codemirror aspects
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';

// Import the language
import { GCodeLanguage } from 'gcode-lang-codemirror';

// Create the editor state pre-filled with some G-Code
let state = EditorState.create({
  doc: 'G1 X30.00 Y90\nG90\nG0', 
  extensions: [
    basicSetup,
    GCodeLanguage(),
  ]
});

// Create the editor view and bind to the element in the DOM
const view = new EditorView({
  state, 
  parent: document.querySelector('#editor')
});
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, OneIsland Limited