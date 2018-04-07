import {Color} from "../../tools/color";
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
      Logger.print(Color.yellow(`Project already initialised`));

      return true;
    }

    if(this.options["help"]) {
      Logger.print(`Initialise a new AngularJS project`);

      return true;
    }

    Logger.log(Color.cyan(`Initialising project... `));

    const prompt = new Prompt();
    prompt.newProject(false);
  }

}
