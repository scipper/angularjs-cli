import {Executor} from "../executor";
import {Command} from "../command";
import {Config} from "../../config";
import {Logger} from "../../tools/logger";
import {Option} from "../../options/option";

export class GenerateCommandExecutor extends Executor {

  /**
   *
   * @param {Command} command
   * @param {{}} options
   * @param {Config} config
   */
  constructor(command: Command, options: { [key: string]: Option }, config?: Config) {
    super(command, options, config);
  }

  /**
   *
   */
  execute() {
    if(this.options["help"]) {
      Logger.print(`Generate new component or module`);

      return true;
    }

    if(!this.isConfigValid()) {
      return;
    }

    if(!this.isArgumentValid()) {
      return;
    }

    Logger.log(`\x1b[36mGenerating new ${this.command.getArgument()} in '${process.cwd()}'\x1b[0m`);
  }

}
