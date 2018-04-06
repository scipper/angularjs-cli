import {ArgumentService} from "./argument.service";
import {Command} from "./commands/command";
import {HelpCommandExecutor} from "./commands/help-command/help-command.executor";
import {Option} from "./options/option";
import {ErrorCodes} from "./errors/error-codes";
import {NewCommandExecutor} from "./commands/new-command/new-command.executor";
import {AvailableCommands} from "./commands/available-commands";
import * as _ from "lodash";
import {GenerateCommandExecutor} from "./commands/generate-command/generate-command.executor";
import {InitCommandExecutor} from "./commands/init-command/init-command.executor";
import {Config} from "./config";
import {Color} from "./tools/color";
import {Logger} from "./tools/logger";

export class AngularjsCli {

  static VERSION = "1.0.0";
  static NAME = "AngularJS CLI";
  static SHORT_NAME = "ngjs";
  protected config?: Config;
  protected cliArguments: string[];
  protected options: { [key: string]: Option };
  protected command: Command;
  protected allowExecution: boolean;

  /**
   *
   * @param {Array<string>} cliArguments
   */
  constructor(cliArguments: string[]) {
    this.allowExecution = false;

    this.cliArguments = cliArguments;

    this.options = ArgumentService.parseOptions(JSON.parse(JSON.stringify(cliArguments)));
    this.command = ArgumentService.parseCommand(JSON.parse(JSON.stringify(cliArguments)));
  }

  /**
   *
   */
  readConfig() {
    try {
      this.config = require(process.cwd() + "/ngjs.json");
    } catch(e) {

    }
  }

  /**
   *
   */
  prepare() {
    const commandValidResult = this.isCommandValid();

    if(this.options["version"]) {
      let welcomeMessage = Color.cyan("\n-----------------------\n");
      welcomeMessage += Color.cyan(` ${AngularjsCli.NAME} - ${AngularjsCli.VERSION} \n`);
      welcomeMessage += Color.cyan("-----------------------");
      Logger.print(welcomeMessage);

      return;
    }

    if(commandValidResult === ErrorCodes.COMMAND_MISSING_COMMAND) {
      Logger.print(`${Color.yellow("Missing command")}. Available commands are:`);

      _.forEach(AvailableCommands, (command: Command) => {
        Logger.print(` ${command.getName()}`);
      });
    }

    if(commandValidResult === ErrorCodes.COMMAND_MISSING_ARGUMENT) {
      Logger.print(`\x1b[31mMissing argument on command ${this.getCommandName()} \x1b[0m`);
    }

    if(commandValidResult === ErrorCodes.COMMAND_INVALID_OPTIONS) {
      Logger.print(`\x1b[31mInvalid options on command ${this.getCommandName()}\x1b[0m. Valid options are:`);
      _.forEach(this.getCommand().getAvailableOptions(), (option: Option) => {
        Logger.print(` ${option.getShortName() ? "-" + option.getShortName() : ""}    --${option.getLongName()}`);
      });
    }

    if(commandValidResult === ErrorCodes.OK) {
      this.allowExecution = true;
    }
  }

  /**
   *
   * @returns {void}
   */
  process(): void {
    if(!this.allowExecution) {
      return;
    }

    let executor;

    switch(this.command.getName()) {
      case "help":
        executor = new HelpCommandExecutor(this.command, this.options, this.config);
        executor.execute();
        break;
      case "init":
        executor = new InitCommandExecutor(this.command, this.options, this.config);
        executor.execute();
        break;
      case "new":
        executor = new NewCommandExecutor(this.command, this.options, this.config);
        executor.execute();
        break;
      case "generate":
        executor = new GenerateCommandExecutor(this.command, this.options, this.config);
        executor.execute();
        break;
    }
  }

  finish() {

  }

  /**
   *
   * @returns {string}
   */
  protected getCommandName(): string {
    return this.command.getName();
  }

  /**
   *
   * @returns {Command}
   */
  protected getCommand(): Command {
    return this.command;
  }

  /**
   *
   * @returns {number}
   */
  protected isCommandValid(): number {
    if(this.command === null) {
      return ErrorCodes.COMMAND_MISSING_COMMAND;
    }

    if(this.command.needsArgument() && this.command.getArgument() === "") {
      return ErrorCodes.COMMAND_MISSING_ARGUMENT;
    }

    const optionKeys = Object.keys(this.options);
    if(optionKeys.length > 0) {
      let invalidOptions = false;
      _.forEach(this.options, (option) => {
        if(!this.command.getAvailableOptions()[option.getLongName()]) {
          invalidOptions = true;
        }
      });

      if(invalidOptions) {
        return ErrorCodes.COMMAND_INVALID_OPTIONS;
      }
    }

    return ErrorCodes.OK;
  }

}
