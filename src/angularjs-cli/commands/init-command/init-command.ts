import {HelpOption} from "../../options/help.option";
import {Command} from "../command";

export class InitCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'init';

    const helpOption = new HelpOption();

    this.availableOptions = {
      [helpOption.getLongName()]: helpOption
    };
  }

}
