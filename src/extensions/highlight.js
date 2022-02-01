// Import the codemirror hightlight package
import { HighlightStyle, tags } from '@codemirror/highlight';

// Define the hightlighting styles
export const GCodeHighlighting = HighlightStyle.define([
  { tag: tags.variableName, color: '#1f5d8f' },
  { tag: tags.number, color: '#4f9cbe' },
  { tag: tags.strong, color: '#4387be', fontWeight: 'bold' },
  { tag: tags.function, color: '#1f5d8f', fontWeight: 'bold' },
  { tag: tags.lineComment, color: '#839aa5', fontStyle: 'italic' }
]);

// Export default also
export default GCodeHighlighting;