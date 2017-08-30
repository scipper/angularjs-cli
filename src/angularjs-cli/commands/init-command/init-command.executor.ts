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
    if(this.config !== null) {
      Logger.print(`\x1b[36mProject already initialised\x1b[0m`);

      return true;
    }

    Logger.log(`\x1b[36mInitialising project... \x1b[0m`);

    let prompt = new Prompt();
    prompt.newProject(false);
  }

}