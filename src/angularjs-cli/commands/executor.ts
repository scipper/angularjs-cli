import {Command} from "./command";
import * as _ from 'lodash';
import {AngularjsCli} from "../angularjs-cli";
import {Config} from "../config";
import {Logger} from "../tools/logger";
import {Option} from "../options/option";

export abstract class Executor {

  /**
   * @type {Command}
   */
  protected command: Command;

  /**
   * @type {Config}
   */
  protected config: Config;

  /**
   * @type {{}}
   */
  protected options: { [key: string]: Option };

  /**
   *
   * @param {Command} command
   * @param {Config} config
   * @param {{}} options
   */
  constructor(command: Command, config: Config, options: { [key: string]: Option }) {
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
    let isValid = this.command.needsConfig() && this.config !== null;
    if(isValid) {
      return true;
    }

    Logger.print(`\x1b[31mInvalid or no config\x1b[0m. This command needs a valid config to proceed.`);
    Logger.print(`If you have not created a ${AngularjsCli.NAME} project yet, do so by typing 'ngjs new project-name'`);
    Logger.print('You can also create a config in an existing project with \'ngjs init\'');

    return false;
  }

  /**
   *
   * @returns {boolean}
   */
  isArgumentValid(): boolean {
    let isValid = this.command.getAvailableArguments().indexOf(this.command.getArgument()) !== -1 ||
      this.command.getAvailableArguments().length === 0;

    if(isValid) {
      return true;
    }

    Logger.print(`\x1b[31mInvalid argument on command ${this.command.getName()}\x1b[0m. Valid arguments are:`);
    _.forEach(this.command.getAvailableArguments(), (argument: string) => {
      Logger.print(` ${argument}`);
    });

    return false;
  };

}