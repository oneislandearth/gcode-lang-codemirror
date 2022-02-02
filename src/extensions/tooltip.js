// Import the required package for command tooltips
import { hoverTooltip} from '@codemirror/tooltip';

// Import the list of commands from the language
import { GCodeCommands } from './commands.js';

// Command hovering tooltips
export const GCodeCommandTooltips = hoverTooltip((view, pos) => {

  // Select the current line
  let { from, to, text } = view.state.doc.lineAt(pos)

  // Find the command
  const [command] = text.match(/[GM][0-9]+/);

  // Describe the command
  const description = GCodeCommands[command];

  // Try find a command
  if (!description) return null;

  // Return the tooltip
  return {
    pos: from,
    end: to,
    above: true,
    create(view) {
      let dom = document.createElement('div');
      dom.textContent = description;
      return { dom };
    }
  }
});

// Export as default also
export default GCodeCommandTooltips;