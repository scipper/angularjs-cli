import {Executor} from "../executor";
import {Command} from "../command";
import {Config} from "../../config";
import {Logger} from "../../tools/logger";
import {Option} from "../../options/option";

export class GenerateCommandExecutor extends Executor {

  /**
   *
   * @param {Command} command
   * @param {Config} config
   * @param {{}} options
   */
  constructor(command: Command, config: Config, options: { [key: string]: Option }) {
    super(command, config, options);
  }

  /**
   *
   */
  execute() {
    if(!this.isConfigValid()) {
      return;
    }

    if(!this.isArgumentValid()) {
      return;
    }

    Logger.log(`\x1b[36mGenerating new ${this.command.getArgument()} in '${process.cwd()}'\x1b[0m`);
  }

}