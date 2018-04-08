import {Config} from "../../config";
import {Option} from "../../options/option";
import {Color} from "../../tools/color";
import {Logger} from "../../tools/logger";
import {Command} from "../command";
import {Executor} from "../executor";

export class HelpCommandExecutor extends Executor {

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
    Logger.print(`here will be some ${Color.cyan("very")} helpful text.`);
  }

}
