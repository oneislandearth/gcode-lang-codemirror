// Import the language tools from codemirror
import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent } from '@codemirror/language';

// Import the highligher tools from codemirror
import { styleTags, tags as t } from '@codemirror/highlight';

// Import the compiled language
import { parser } from './compiled/language.js';

// Import the extensions
import { GCodeHighlighting } from '../utils/highlight.js';
import { GCodeCommandTooltips } from '../utils/tooltip.js';

// Define the GCode Language
export const GCodeLanguage = () => {
  
  // Create a support language
  const language = LRLanguage.define({
    parser: parser.configure({
      props: [
        // indentNodeProp.add({
        //   Application: delimitedIndent({ align: false })
        // }),
        // foldNodeProp.add({
        //   Application: foldInside
        // }),
        // indentNodeProp.add({
        //   Application: context => context.column(context.node.from) + context.unit
        // }),
        // foldNodeProp.add({
        //   Application: foldInside
        // }),
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