import {AngularjsCli} from "../../angularjs-cli";
import {Executor} from "../executor";
import {Command} from "../command";
import * as path from "path";
import {Config} from "../../config";
import {Logger} from "../../tools/logger";
import {Option} from "../../options/option";
import {Prompt} from "../../operations/prompt";

export class NewCommandExecutor extends Executor {

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
      Logger.print(`\x1b[31mCan not create an ${AngularjsCli.NAME} project in an existing one\x1b[0m`);

      return;
    }

    if(!this.isArgumentValid()) {
      return;
    }

    Logger.print(`\x1b[36mCreating new ${AngularjsCli.NAME} project in '${path.join(process.cwd(), this.command.getArgument())}\x1b[0m'`);

    const prompt = new Prompt();
    prompt.newProject(true);
  }

}
