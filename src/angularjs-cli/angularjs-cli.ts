import {ArgumentService} from "./argument.service";
import {Argument} from "./commands/argument";
import {Command} from "./commands/command";
import {HelpCommandExecutor} from "./commands/help-command/help-command.executor";
import {InvalidCommand} from "./commands/invalid-command";
import {Option} from "./options/option";
import {ErrorCodes} from "./errors/error-codes";
import {AvailableCommands} from "./commands/available-commands";
import * as _ from "lodash";
import {GenerateCommandExecutor} from "./commands/generate-command/generate-command.executor";
import {InitCommandExecutor} from "./commands/init-command/init-command.executor";
import {Config} from "./config";
import {Color} from "./tools/color";
import {Logger} from "./tools/logger";
import * as fs from "fs";

export class AngularjsCli {

  static VERSION = "1.0.0";
  static NAME = "AngularJS CLI";
  static SHORT_NAME = "ngjs";
  protected config?: Config;
  protected cliArguments: string[];
  protected options: { [key: string]: Option };
  protected command: Command;
  protected executionCode: number;
  protected showVersion: boolean;

  /**
   *
   * @param {Array<string>} cliArguments
   */
  constructor(cliArguments: string[]) {
    this.executionCode = ErrorCodes.NOT_INITIALISED;
    this.showVersion = false;

    this.cliArguments = cliArguments;

    this.options = ArgumentService.parseOptions(JSON.parse(JSON.stringify(cliArguments)));
    this.command = ArgumentService.parseCommand(JSON.parse(JSON.stringify(cliArguments)));
  }

  /**
   *
   */
  readConfig() {
    try {
      this.config = JSON.parse(fs.readFileSync(process.cwd() + "/ngjs.json").toString());
    } catch(error) {
      Logger.print(Color.blue("INFO: No ngjs.json found"));
    }
  }

  /**
   *
   */
  prepare() {
    this.executionCode = this.isCommandValid();
    this.showVersion = this.options.hasOwnProperty("version");
  }

  /**
   *
   * @returns {void}
   */
  process(): void {
    if(this.showVersion) {
      let welcomeMessage = Color.cyan("-----------------------\n");
      welcomeMessage += Color.cyan(` ${AngularjsCli.NAME} - ${AngularjsCli.VERSION} \n`);
      welcomeMessage += Color.cyan("-----------------------\n");
      Logger.print(welcomeMessage);
    }

    if(this.executionCode !== ErrorCodes.OK) {
      this.handleErrors();

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
   */
  protected handleErrors() {
    if(this.executionCode === ErrorCodes.COMMAND_MISSING_COMMAND) {
      Logger.print(`${Color.yellow("Missing command")}. Available commands are:`);

      _.forEach(AvailableCommands, (command: Command) => {
        Logger.print(` ${command.getName()}\t${command.getDescription()}`);
      });
    }

    if(this.executionCode === ErrorCodes.COMMAND_INVALID_COMMAND) {
      Logger.print(`${Color.red("Invalid command")}. Available commands are:`);

      _.forEach(AvailableCommands, (command: Command) => {
        Logger.print(` ${command.getName()}\t${command.getDescription()}`);
      });
    }

    if(this.executionCode === ErrorCodes.COMMAND_MISSING_ARGUMENT) {
      Logger.print(`${Color.yellow(`Missing argument on command ${this.getCommandName()}`)}. Valid arguments are:`);
      _.forEach(this.getCommand().getAvailableArguments(), (argument: Argument) => {
        Logger.print(` ${argument.getName()}`);
      })
    }

    if(this.executionCode === ErrorCodes.COMMAND_INVALID_OPTIONS) {
      Logger.print(`${Color.yellow(`Invalid options on command ${this.getCommandName()}`)}. Valid options are:`);
      _.forEach(this.getCommand().getAvailableOptions(), (option: Option) => {
        Logger.print(` ${option.getShortName() ? "-" + option.getShortName() : ""} --${option.getLongName()}`);
      });
    }
  }

  /**
   *
   * @returns {string}
   */
  protected getCommandName() {
    if(!this.command) {
      return "";
    }

    return this.command.getName();
  }

  /**
   *
   * @returns {Command | null}
   */
  protected getCommand() {
    return this.command;
  }

  /**
   *
   * @returns {number}
   */
  protected isCommandValid(): number {
    if(this.command.getName() === "MISSING") {
      return ErrorCodes.COMMAND_MISSING_COMMAND;
    }

    if(this.command.getName() === "INVALID") {
      return ErrorCodes.COMMAND_INVALID_COMMAND;
    }

    if(this.command.needsArgument() &&
      this.command.getArgument() === "" &&
      !this.options.hasOwnProperty("help")) {
      return ErrorCodes.COMMAND_MISSING_ARGUMENT;
    }

    return ErrorCodes.OK;
  }

}
