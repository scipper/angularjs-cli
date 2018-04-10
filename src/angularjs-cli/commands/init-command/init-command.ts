import {AngularjsCli} from "../../angularjs-cli";
import {HelpOption} from "../../options/help.option";
import {Command} from "../command";

export class InitCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'init';
    this.description = `\tInitialise an existing project as \${AngularjsCli.NAME} project`;

    const helpOption = new HelpOption();

    this.availableOptions = {
      [helpOption.getLongName()]: helpOption
    };
  }

}
