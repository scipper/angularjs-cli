import {Option} from "./options/option";
import {AvailableOptions} from "./options/available-options";
import {Command} from "./commands/command";
import {AvailableCommands} from "./commands/available-commands";
import * as _ from 'lodash';

export class ArgumentService {

  /**
   *
   * @param {Array<string>} cliArguments
   * @returns {{}}
   */
  public static parseOptions(cliArguments: Array<string>): { [key: string]: Option } {
    let realArguments: Array<string> = cliArguments.splice(2);
    let options: { [key: string]: Option } = {};

    _.forEach(realArguments, (argument: string) => {
      if(AvailableOptions.hasOwnProperty(argument)) {
        options[AvailableOptions[argument].getLongName()] = AvailableOptions[argument];
      }
    });

    return options;
  }

  /**
   *
   * @param {Array<string>} cliArguments
   * @returns {Array<Command>}
   */
  public static parseCommand(cliArguments: Array<string>): Command {
    let realArguments: Array<string> = cliArguments.splice(2);
    let command: Command = null as any;

    if(realArguments.length === 0) {
      return command;
    }

    if(AvailableCommands.hasOwnProperty(realArguments[0])) {
      command = AvailableCommands[realArguments[0]];
    }

    if(command && realArguments[1] !== undefined && realArguments[1].indexOf('-') === -1) {
      command.setArgument(realArguments[1]);
    }

    return command;
  }

}