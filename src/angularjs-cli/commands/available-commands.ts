import {HelpCommand} from "./help-command/help-command";
import {NewCommand} from "./new-command/new-command";
import {Command} from "./command";
import {GenerateCommand} from "./generate-command/generate-command";
import {InitCommand} from "./init-command/init-command";

const newCommand = new NewCommand();
const generateCommand = new GenerateCommand();
const initCommand = new InitCommand();
const helpCommand = new HelpCommand();

/**
 *
 * @type {{}}
 */
export const AvailableCommands: { [key: string]: Command } = {
  [helpCommand.getName()]: helpCommand,
  [initCommand.getName()]: initCommand,
  [newCommand.getName()]: newCommand,
  [generateCommand.getName()]: generateCommand
};
