import {Executor} from "../executor";
import {Command} from "../command";
import {Config} from "../../config";
import {Logger} from "../../tools/logger";
import {Option} from "../../options/option";
import {Prompt} from "../../operations/prompt";

export class InitCommandExecutor extends Executor {

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
    if(this.config) {
      Logger.print(`\x1b[36mProject already initialised\x1b[0m`);

      return true;
    }

    Logger.log(`\x1b[36mInitialising project... \x1b[0m`);

    const prompt = new Prompt();
    prompt.newProject(false);
  }

}
