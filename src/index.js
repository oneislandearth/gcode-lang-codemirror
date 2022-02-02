// Import the language tools from codemirror
import { LRLanguage, LanguageSupport } from '@codemirror/language';

// Import the highligher tools from codemirror
import { styleTags, tags as t } from '@codemirror/highlight';

// Import the compiled language
import { parser } from './language/gcode.js';

// Import the extensions
import { GCodeHighlighting } from './extensions/highlight.js';
import { GCodeCommandTooltips } from './extensions/tooltip.js';

// Define the GCode Language
export function GCodeLanguage () {
  
  // Create a support language
  const language = LRLanguage.define({
    parser: parser.configure({
      props: [
        styleTags({
          GCommand: t.variableName,
          MCommand: t.variableName,
          ControlKeyword: t.controlKeyword,
          ControlOperator: t.controlOperator,
          Function: t.float,
          Variables: t.name,
          Axis: t.strong,
          Position: t.number,
          Arc: t.strong,
          FeedSpeed: t.propertyName,
          ON: t.function,
          Brackets: t.squareBracket,
          Movement: t.standard
        })
      ]
    }),
    languageData: {
      commentTokens: {
        line: ';'
      }
    }
  });

  // Return the language and extensions
  return new LanguageSupport(language, [
    GCodeHighlighting,
    GCodeCommandTooltips
  ]);
};

// Export as default
export default GCodeLanguage;