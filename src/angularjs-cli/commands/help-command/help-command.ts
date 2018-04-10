import {AngularjsCli} from "../../angularjs-cli";
import {Command} from "../command";

export class HelpCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'help';
    this.description = `\tSee a short introduction to \${AngularjsCli.NAME}`;
  }

}
