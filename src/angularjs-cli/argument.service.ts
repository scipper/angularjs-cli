import {InvalidCommand} from "./commands/invalid-command";
import {MissingCommand} from "./commands/missing-command";
import {Option} from "./options/option";
import {AvailableOptions} from "./options/available-options";
import {Command} from "./commands/command";
import {AvailableCommands} from "./commands/available-commands";
import * as _ from 'lodash';

export class ArgumentService {

  /**
   *
   * @param {string[]} cliArguments
   * @returns {{}}
   */
  public static parseOptions(cliArguments: string[]): { [key: string]: Option } {
    const realArguments: string[] = cliArguments.splice(2);
    const options: { [key: string]: Option } = {};

    _.forEach(realArguments, (argument: string) => {
      if(AvailableOptions.hasOwnProperty(argument)) {
        options[AvailableOptions[argument].getLongName()] = AvailableOptions[argument];
      }
    });

    return options;
  }

  /**
   *
   * @param {string[]} cliArguments
   * @returns {Command}
   */
  public static parseCommand(cliArguments: string[]): Command {
    const realArguments: string[] = cliArguments.splice(2);
    let command: Command = new MissingCommand();

    if(realArguments.length === 0) {
      return command;
    }

    if(AvailableCommands.hasOwnProperty(realArguments[0])) {
      command = AvailableCommands[realArguments[0]];
    }

    if(command.getName() === "MISSING") {
      command = new InvalidCommand();

      return command;
    }

    if(command && realArguments[1] !== undefined && realArguments[1].indexOf('-') === -1) {
      command.setArgument(realArguments[1]);
    }

    if(command.getArgument() &&
      command.getAvailableArguments().hasOwnProperty(command.getArgument()) &&
      command.getAvailableArguments()[command.getArgument()].valueNeeded()) {
      let argumentValue = "";
      if(realArguments[2] && realArguments[2].charAt(0) !== "-") {
        argumentValue = realArguments[2];
      }
      command.getAvailableArguments()[command.getArgument()].setValue(argumentValue);
    }

    return command;
  }

}
