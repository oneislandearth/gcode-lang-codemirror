import{LRLanguage as r,LanguageSupport as a}from"@codemirror/language";import{styleTags as t,tags as o}from"@codemirror/highlight";import{parser as n}from"./language/gcode.js";import{GCodeHighlighting as m}from"./extensions/highlight.js";import{GCodeCommandTooltips as i}from"./extensions/tooltip.js";function p(){const e=r.define({parser:n.configure({props:[t({GCommand:o.variableName,MCommand:o.variableName,ControlKeyword:o.controlKeyword,ControlOperator:o.controlOperator,Function:o.float,Variables:o.name,Axis:o.strong,Position:o.number,Arc:o.strong,FeedSpeed:o.propertyName,ON:o.function,Brackets:o.squareBracket,Movement:o.standard})]}),languageData:{commentTokens:{line:";"}}});return new a(e,{GCodeHighlighting:m,GCodeCommandTooltips:i})}var c=p;export{p as GCodeLanguage,c as default};
