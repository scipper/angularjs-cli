import {OptionsType} from "../options/options.type";
import {Color} from "../tools/color";
import {Argument} from "./argument";
import {Command} from "./command";
import * as _ from 'lodash';
import {AngularjsCli} from "../angularjs-cli";
import {Config} from "../config";
import {Logger} from "../tools/logger";

export abstract class Executor {

  protected command: Command;
  protected config?: Config;
  protected options: OptionsType;

  /**
   *
   * @param {Command} command
   * @param {OptionsType} options
   * @param {Config} config
   */
  protected constructor(command: Command, options: OptionsType, config?: Config) {
    this.command = command;
    this.config = config;
    this.options = options;

    if(this.options['verbose']) {
      Logger.verbose = true;
    }
  }

  /**
   *
   */
  abstract execute(): void;

  /**
   *
   * @returns {boolean}
   */
  isConfigValid(): boolean {
    const isValid = this.command.needsConfig() && this.config;
    if(isValid) {
      return true;
    }

    Logger.print(`${Color.red("Invalid or no config")}. This command needs a valid config to proceed.`);
    Logger.print(`If you have not created a ${AngularjsCli.NAME} project yet, do so by typing 'ngjs new project-name'`);
    Logger.print('You can also create a config in an existing project with \'ngjs init\'');

    return false;
  }

  /**
   *
   * @returns {boolean}
   */
  isArgumentValid(): boolean {
    const isValid = this.command.getAvailableArguments().hasOwnProperty(this.command.getArgument()) ||
      !this.command.needsArgument();

    if(!isValid) {
      Logger.print(`${Color.red(`Invalid argument on command ${this.command.getName()}`)}. Valid arguments are:`);
      _.forEach(this.command.getAvailableArguments(), (argument: Argument) => {
        Logger.print(` ${argument.getName()}`);
      });

      return false;
    }

    if(this.command.getAvailableArguments().hasOwnProperty(this.command.getArgument()) &&
      this.command.getAvailableArguments()[this.command.getArgument()].valueNeeded() &&
      this.command.getAvailableArguments()[this.command.getArgument()].getValue() === "") {
      Logger.print(Color.red(`Value needed for argument ${this.command.getArgument()}`));

      return false;
    }

    return true;
  }

}
