import {NewCommand} from "./new-command/new-command";
import {Command} from "./command";
import {GenerateCommand} from "./generate-command/generate-command";
import {InitCommand} from "./init-command/init-command";

const newCommand = new NewCommand();
const generateCommand = new GenerateCommand();
const initCommand = new InitCommand();

/**
 *
 * @type {{}}
 */
export const AvailableCommands: { [key: string]: Command } = {
  [initCommand.getName()]: initCommand,
  [newCommand.getName()]: newCommand,
  [generateCommand.getName()]: generateCommand
};
