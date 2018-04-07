import {HelpOption} from "../../options/help.option";
import {Command} from "../command";
import {VerboseOption} from "../../options/verbose.option";

export class InitCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'init';

    const verboseOption = new VerboseOption();
    const helpOption = new HelpOption();

    this.availableOptions = {
      [verboseOption.getLongName()]: verboseOption,
      [helpOption.getLongName()]: helpOption
    };
  }

}
